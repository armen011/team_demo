import React, {useEffect, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import UserIcon from "../../assets/images/user.png";
import settingIcon from "../../images/settings.png";
import ProfileCategory from "../Profile/Components/ProfileCategory";
import SinglePost from "../Profile/Components/SinglePost";
import PostPhoto from "../../images/posting.png";
import Footer from "../../layouts/AuthLayout/Components/Footer";
import '../Profile/Profile.css'
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../app";
import {useNavigate} from "react-router";

type TUserState = {
    coverPicture: string,
    createdAt: string,
    dateOfBirth: string,
    email: string
    followers: [],
    followings: []
    fullName: string,
    isAdmin: boolean,
    profilePicture: string,
    username: string,
    __v: number,
    _id: string,
}
const EachUserProfile = () => {
    const [data, setData] = useState<TUserState>()
    const {userId} = useParams()
    const creatorId = useAppSelector(state => state.user._id)

    useEffect(() => {
        fetch(
            `http://localhost:8800/api/users/${userId}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" }})
            .then((res) => res.json()).then(res=> setData(res))
    }, [])
    const category = [
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
    const [categoryList,setCategoryList] = useState(category)

    const changeCategoryActivationHandler = (name:string)=> {
        setCategoryList(prevState => {
            return prevState.map(elem=> {
                elem.isActive = elem.name === name && !elem.isActive;
                return elem
            })
        })
    }
    const navigate = useNavigate()

    const handleMessageClick = () => {
        if (creatorId !== userId) {
            fetch(
                'http://localhost:8800/api/chat',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({creatorId, memberId: userId})
                }
            )
                .then((res) => res.json()).then(res => {
                navigate(`/messages/${userId}`)
            })
        }else {
            navigate(`messages/${userId}`)
        }
    }

    const handleFollowToggle = () => {
        // fetch(
        //     `http://localhost:8800/api/:id/follow`,
        //     {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body:JSON.stringify({userId})
        //     }
        // )
        //     .then((res) => res.json()).then(res=>{
        //     console.log(res, "FOLLOWING")
        // })

    }

    return (
        <MainLayout>

            <div className={'my_profile'}>
                <div className={'upper_part'}>
                    <div className={'my_profile_image'}>
                        <img src={data?.profilePicture ? data?.profilePicture : UserIcon} alt={'Change image'}/>
                    </div>

                    <div className={'my_profile_about'}>

                        <div className={'my_profile_name_part'}>
                            <div className={'my_profile_name_text'}><span>{data?.username}</span></div>

                            <div className={'my_profile_edit_part'}>
                                <div onClick={handleFollowToggle} className={'my_profile_edit_button'}>Following</div>
                                <div onClick={handleMessageClick} className={'my_profile_edit_button'}>Message</div>
                            </div>

                            <div className={'my_profile_setting_part'}>
                                <img style={{cursor: "pointer", width: '20px'}} src={settingIcon} alt="Settings"/>
                            </div>
                        </div>

                        <div className={'my_profile_counts_part'}>
                            <div style={{cursor: "pointer"}}><span>???</span> post</div>
                            <div className={'followers_count'}><span>{data?.followers.length}</span> followers</div>
                            <div className={'following_count'}><span>{data?.followings.length}</span> following</div>
                        </div>

                        <p style={{fontSize: '17px', fontWeight: 'bold'}}>{data?.fullName}</p>
                    </div>
                </div>

                {/*/!*Story*!  here should be stories*/}
                <div className={'my_profile_highlight_part'}>
                    {/*<Highlight text={'Haylo'} image={UserIcon}/>*/}

                </div>

                <div className={'my_profile_show_category_part'}>
                    {categoryList.map((elem,index)=>{
                        return <ProfileCategory isActive={elem.isActive}
                                                setActivation={() => changeCategoryActivationHandler(elem.name)}
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

export default EachUserProfile;