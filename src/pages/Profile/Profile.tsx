import MainLayout from "layouts/MainLayout"
import Footer from "layouts/AuthLayout/Components/Footer";
import Highlight from "./Components/Highlight";
import SinglePost from "./Components/SinglePost";
import ProfileCategory from "./Components/ProfileCategory";

import './Profile.css'

import settingIcon from '../../images/settings.png'
import UserIcon from '../../assets/images/user.png'
import PostPhoto from '../../images/posting.png'
import { useState} from "react";
import UTILS from "../../utils";
import {userSlice} from "../../features/user";
import {useAppDispatch, useAppSelector} from "../../app";


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
    const [imageSrc,setImageSrc] = useState<string>()

    const {addImage} = userSlice.actions
    const  dispatch = useAppDispatch()

    const {username,fullName,followers,followings} = useAppSelector(s=>s.user)

    const changeCategoryActivationHandler = (name:string)=> {
        setCategoryList(prevState => {
            return prevState.map(elem=> {
                elem.isActive = elem.name === name && !elem.isActive;
                return elem
            })
        })
    }




    function getImageHandler(e:React.ChangeEvent<HTMLInputElement>){
        if (e.target.files) {
            let file = e.target.files[0];

        if (['image/png','image/jpeg'].includes(file.type)){
            UTILS.encodeImageFileAsURL(file).then(response =>{
                setImageSrc(response)
                dispatch(addImage({src:response}))
            } )
        }else{
            alert('You can only add PNG or JPEG')
        }
        }
    }


    function onDragEnterHandler(e:React.DragEvent) {
        e.preventDefault()
    }

    function onDragOverHandler(e:React.DragEvent) {
        e.preventDefault()
    }

    function onDragLeaveHandler(e:React.DragEvent) {
        e.preventDefault()
    }

    function onDragDropHandler(e:React.DragEvent<HTMLLabelElement>) {
        e.preventDefault()


        let file = e.dataTransfer.files[0];

        if (['image/png','image/jpeg'].includes(file.type)){
            UTILS.encodeImageFileAsURL(file).then(r => setImageSrc(r))
        }else{
            alert('You can only add PNG or JPEG')
        }
    }

  return (
    <MainLayout>

        <div className={'my_profile'}>
            <div className={'upper_part'}>
                <div className={'my_profile_image'}>
                    <img src={imageSrc ? imageSrc : UserIcon} alt={'Change image'}/>
                    <div className={'label_part'}>
                        <label className={'file_input_label'}
                        onDragEnter={onDragEnterHandler}
                        onDragOver={onDragOverHandler}
                        onDragLeave={onDragLeaveHandler}
                        onDrop={onDragDropHandler} >
                            <input type="file" onChange={(e)=>getImageHandler(e)} hidden/>
                        </label>
                    </div>
                </div>

                <div className={'my_profile_about'}>

                    <div className={'my_profile_name_part'}>
                        <div className={'my_profile_name_text'}><span>{username}</span></div>

                        <div className={'my_profile_edit_part'}>
                           <div className={'my_profile_edit_button'}>Edit profile</div>
                        </div>

                        <div className={'my_profile_setting_part'}>
                            <img src={settingIcon} alt="Settings"/>
                        </div>
                    </div>

                    <div className={'my_profile_counts_part'}>
                        <div><span>3</span>  post</div>
                        <div className={'followers_count'}><span>{followers.length}</span> followers</div>
                        <div className={'following_count'}><span>{followings.length}</span>  following</div>
                    </div>


                    <div>About:{fullName}</div>
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
