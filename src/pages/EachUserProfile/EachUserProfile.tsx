import React, {useEffect, useMemo, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import UserIcon from "../../assets/images/user.png";
import settingIcon from "../../images/settings.png";
import ProfileCategory from "../Profile/Components/ProfileCategory";
import Footer from "../../layouts/AuthLayout/Components/Footer";
import '../Profile/Profile.css'
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../app";
import {useNavigate} from "react-router";
import {onePost, Tpost} from "../Main/PostComponent/PostComponent";
import CameraIcon from "../../images/camera.png";
import {useTranslation} from "react-i18next";
import ImageSlider from "../../components/CreateModal/Components/ImageSlider";

export type TUserState = {
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

    const [eachUserPost, setEachUserPost] = useState<Tpost>()
    const [data, setData] = useState<TUserState>()
    const {userId} = useParams()
    const creatorId = useAppSelector(state => state.user._id)
    const allPosts = useAppSelector(state => state.getPosts)
    const [follow, setFollow] = useState<boolean>(false)
    const [followersCount, setFollowersCount] = useState<number>(0)

    useEffect(() => {
        fetch(
            `http://localhost:8800/api/users/${userId}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" }})
            .then((res) => res.json()).then(res=> {
                const condition = res.followers.some((value: string) => value === creatorId);
                setFollow(condition)
                setFollowersCount(res.followers.length)
                setData(res)
            })
    }, [])

    const filtered = allPosts.filter(elem => elem._doc.userId === userId)


    useMemo(() => {
        if (filtered.length){
            setEachUserPost(filtered)
        }
    }, [])

    const categories = [
        {
            name:'POSTS',
            path:userId,
            isActive:true
        }
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
    const navigate = useNavigate()

    const handleMessageClick = () => {
            fetch(
                'http://localhost:8800/api/chat',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({creatorId, memberId: userId})
                }
            )
                .then((res) => res.json()).then(res => {
                navigate(`/messages/${res.id}`)
            })
    }
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;
    const handleFollowToggle = () => {
        setFollow(!follow)
        if (follow && followersCount) {
            setFollowersCount(followersCount - 1)
        }
        if (!follow){
            setFollowersCount(followersCount + 1)
        }
        fetch(`${baseUrl}api/users/${userId}/${follow ? 'unfollow' : 'follow'}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: creatorId
              })
        }).then(res=> res.json()).then(res=>res).catch(error=> console.log(error))
    }

    const {t} = useTranslation()

    return (
        <MainLayout>

            <div className='my_profile_wrapper'>
                <div className={'my_profile'}>
                <div className={'upper_part'}>
                    <div className={'my_profile_image'}>
                        <img src={data?.profilePicture ? data?.profilePicture : UserIcon} alt={'Change image'}/>
                    </div>

                    <div className={'my_profile_about'}>

                        <div className={'my_profile_name_part'}>
                            <div className={'my_profile_name_text'}><span>{data?.username}</span></div>

                            <div className={'my_profile_edit_part'}>
                                {!follow ? <div onClick={handleFollowToggle} className='follow_not_active'>{t('Follow')}</div>
                                    :
                                    <div onClick={handleFollowToggle} className='my_profile_edit_button'>{t('Following')}</div>
                                }
                                <div onClick={handleMessageClick} className={'my_profile_edit_button'}>{t('Message')}</div>
                            </div>

                            <div className={'my_profile_setting_part'}>
                                <img style={{cursor: "pointer", width: '20px'}} src={settingIcon} alt="Settings"/>
                            </div>
                        </div>

                        <div className={'my_profile_counts_part'}>
                            <div style={{cursor: "pointer"}}><span>{eachUserPost?.length}</span> {t('Post')}</div>
                            <div className={'followers_count'}><span>{followersCount}</span> {t('followers')}</div>
                            <div className={'following_count'}><span>{data?.followings.length}</span> {t('following')} </div>
                        </div>

                        <p style={{fontSize: '17px', fontWeight: 'bold'}}>{data?.fullName}</p>
                    </div>
                </div>

                <div className={'my_profile_show_category_part'}>
                    {categoryList.map((elem,index)=>{
                        return <ProfileCategory isActive={elem.isActive}
                                                setActivation={() => changeCategoryActivationHandler(elem.name)}
                                                name={elem.name} path={elem.path} key={index * Math.random()}/>
                    })}
                </div>
                <div className={'my_profile_posting_part'}>
                </div>



                    {follow ?
                        <div className='fixing_flex'>
                            {!eachUserPost ?
                                <div className='no_posts'>
                                    <div className={'my_profile_post_dont_have'}>
                                        <div className={'my_profile_post_dont_have_image'}>
                                            <img src={CameraIcon} alt="camera icon"/>
                                        </div>

                                        <h4>{t('No Posts Yet')}</h4>


                                    </div>
                                </div>
                                :
                                eachUserPost.map((elem: onePost) =>
                                    <div key={Math.random()} style={{width: '293px', height: '293px', margin: '10px' , position:"relative"}}>
                                        <ImageSlider images={elem.images}/>
                                    </div>
                                )

                            }
                        </div>
                     : <div className='not_followed'>
                            <div className='not_followed_text'>
                                <p>
                                    {t('This Account is Private')}

                                </p>
                                <p style={{maxWidth: '200px', textAlign: 'center', lineHeight: '30px', marginTop: '10px'}}>
                                    {t('Follow to see their photos and videos.')}
                                </p>
                            </div>
                        </div>}
            </div>
                <Footer/>
            </div>
        </MainLayout>
    )
}

export default EachUserProfile;