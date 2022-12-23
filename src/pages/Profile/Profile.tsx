import MainLayout from "layouts/MainLayout"
import Footer from "layouts/AuthLayout/Components/Footer";
import ProfileCategory from "./Components/ProfileCategory";
import './Profile.css'
import UTILS from "../../utils";
import {refreshPage, userSlice} from "../../features/user";
import {useAppDispatch, useAppSelector} from "../../app";
import settingIcon from 'images/settings.png'
import UserIcon from 'assets/images/user.png'
import {useEffect, useState} from "react";
import {TUserState} from "../EachUserProfile/EachUserProfile";
import Neccessary from "./Components/Neccessary";


const Profile = () => {
    const categories = [
        {
            name:'POSTS',
            path:'/profile',
            isActive:true
        }
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
    const [imageSrc,setImageSrc] = useState<string>()

    const {addImage} = userSlice.actions


    const changeCategoryActivationHandler = (name:string)=> {
        setCategoryList(prevState => {
            return prevState.map(elem=> {
                elem.isActive = elem.name === name && !elem.isActive;
                return elem
            })
        })
    }
    const user = useAppSelector(state => state.user)
    const  dispatch = useAppDispatch()




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

        <div className='my_profile_wrapper'>
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

            <div className={'my_profile_show_category_part'}>
                {categoryList.map((elem,index)=>{
                    return <ProfileCategory isActive={elem.isActive} setActivation={() => changeCategoryActivationHandler(elem.name)}
                                            name={elem.name} path={elem.path} key={index * Math.random()}/>
                })}
            </div>

                <Neccessary/>

        </div>
            <Footer/>
        </div>

    </MainLayout>
  )
}

export default Profile
