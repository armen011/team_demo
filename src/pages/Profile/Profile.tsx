import MainLayout from "layouts/MainLayout"
import Footer from "../../layouts/AuthLayout/Components/Footer";
import Highlight from "./Components/Highlight";
import SinglePost from "./Components/SinglePost";
import ProfileCategory from "./Components/ProfileCategory";

import './Profile.css'

import settingIcon from '../../images/settings.png'
import UserIcon from '../../assets/images/user.png'
import PostPhoto from '../../images/posting.png'
import {useState} from "react";


const Profile = () => {

    const categories = [
        {
            name:'POSTS',
            path:'/',
            isActive:true
        },
        {
            name:'SAVED',
            path:'/saved',
            isActive:false
        },
        {
            name:'TAGGED',
            path:'/tagged',
            isActive:false
        },
    ]

    const [categoryList,setCategoryList] = useState(categories)


    const changeCategoryActivationHandler = (name:string)=> {
        setCategoryList(prevState => {
            return prevState.map(elem=> {
                elem.isActive = elem.name === name && !elem.isActive;
                return elem
            })
        })
    }


  return (
    <MainLayout>

        <div className={'my_profile'}>
            <div className={'upper_part'}>
                <div className={'my_profile_image'}>
                    <img src={UserIcon} alt={'Change image'}/>
                </div>

                <div className={'my_profile_about'}>

                    <div className={'my_profile_name_part'}>
                        <div className={'my_profile_name_text'}><span>abayvazyan</span></div>

                        <div className={'my_profile_edit_part'}>
                           <div className={'my_profile_edit_button'}>Edit profile</div>
                        </div>

                        <div className={'my_profile_setting_part'}>
                            <img src={settingIcon} alt="Settings"/>
                        </div>
                    </div>

                    <div className={'my_profile_counts_part'}>
                        <div><span>3</span>  post</div>
                        <div className={'followers_count'}><span>333</span> followers</div>
                        <div className={'following_count'}><span>333</span>  following</div>
                    </div>


                    <div>Bio About Me</div>
                </div>
            </div>

            {/*Story*/}
            <div className={'my_profile_highlight_part'}>
                <Highlight text={'Haylo'} image={UserIcon}/>

            </div>

            <div className={'my_profile_show_category_part'}>
                {categoryList.map((elem,index)=>{
                    return <ProfileCategory isActive={elem.isActive} setActivation={() => changeCategoryActivationHandler(elem.name)}
                                            name={elem.name} path={elem.path} key={index * Math.random()}/>
                })}
            </div>
            {/* dont have image-------------------------------------- */}
            {/*    <Neccessary/>*/}


            <div className={'my_profile_posting_part'}>

                <SinglePost image={PostPhoto}/>
                {/*<SinglePost image={PostPhoto}/>*/}
                {/*<SinglePost image={PostPhoto}/>*/}


            </div>


                <Footer/>

        </div>



    </MainLayout>
  )
}

export default Profile
