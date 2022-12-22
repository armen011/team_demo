import MainLayout from "layouts/MainLayout"
import Footer from "layouts/AuthLayout/Components/Footer";
import Highlight from "../Components/Highlight";
import SinglePost from "../Components/SinglePost";
import ProfileCategory from "../Components/ProfileCategory";
import '../../Profile/Profile.css'
import settingIcon from 'images/settings.png'
import UserIcon from 'assets/images/user.png'
import PostPhoto from 'images/posting.png'
import {useEffect, useState} from "react";
import { useAppSelector } from "app";
import {TUserState} from "../../EachUserProfile/EachUserProfile";


const ProfileSaved = () => {

    const categories = [
        {
            name:'POSTS',
            path:'/profile',
            isActive:false
        },
        {
            name:'SAVED',
            path:'/profile/saved',
            isActive:true
        },
    ]
    const creatorId = useAppSelector(state => state.user._id)
    const [ownInfo, setOwnInfo] = useState<TUserState>()
    useEffect(() => {
        fetch(
            `http://localhost:8800/api/users/${creatorId}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" }})
            .then((res) => res.json()).then(res => setOwnInfo(res))
    }, [])

    const [categoryList,setCategoryList] = useState(categories)

    const changeCategoryActivationHandler = (name:string)=> {
        setCategoryList(prevState => {
            return prevState.map(elem=> {
                elem.isActive = elem.name === name && !elem.isActive;
                return elem
            })
        })
    }
    const user = useAppSelector(state => state.user)

    return (
        <MainLayout>
            <div className={'my_profile'}>
                <div className={'upper_part'}>
                    <div className={'my_profile_image'}>
                        <img src={UserIcon} alt={'Change image'}/>
                    </div>

                    <div className={'my_profile_about'}>

                        <div className={'my_profile_name_part'}>
                            <div className={'my_profile_name_text'}><span>{user.username}</span></div>

                            <div className={'my_profile_edit_part'}>
                                <div className={'my_profile_edit_button'}>Edit profile</div>
                            </div>

                            <div className={'my_profile_setting_part'}>
                                <img src={settingIcon} alt="Settings"/>
                            </div>
                        </div>

                        <div className={'my_profile_counts_part'}>
                            <div><span>???</span>  post</div>
                            <div className={'following_count'}><span>{ownInfo?.followings.length}</span> followers </div>
                            <div className={'followers_count'}><span>{ownInfo?.followers.length}</span> following</div>
                        </div>


                        <div>{user.fullName}</div>
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

export default ProfileSaved;
