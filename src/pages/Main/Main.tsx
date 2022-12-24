import MainLayout from "layouts/MainLayout"
import Recommendation from "components/Recommendation";
import PostComponent from "./PostComponent"
import { useAppDispatch, useAppSelector } from "app";
import { onePost } from "./PostComponent/PostComponent";
import React, {useEffect} from "react";
import { getPosts } from "features/getPost";
import informationIcon from "./Components/ReactionBar/icons/more.png"
import Neccessary from "../Profile/Components/Neccessary";





const Main=()=>{

    const dispatch = useAppDispatch()
    const {_id} = useAppSelector((state)=>state.user)

    useEffect(()=>{
        dispatch(getPosts(_id || ""))
    },[])

    const usersPosts = useAppSelector((p)=>{
        return p.getPosts
    })

    return<MainLayout>
        <div className="user_post_container">

            {usersPosts.length ? usersPosts.map((post:onePost)=>{
                return <PostComponent key={Math.random()} post={post} postId={post._doc._id}/>
            }) : <div className='first_post_component_wrapper'>
                <div className='first_post_header_div'>
                    <div style={{display:"flex", alignItems: "center"}}>
                        <img className='first_post_image' src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/honey-1296x728-header.jpg?w=1155&h=1528'
                             alt=""/>
                        <span className='first_post_image_text'>
                        Honey Team
                    </span>
                    </div>
                    <img style={{width: "15px", marginRight: '10px'}} src={informationIcon} alt=""/>
                </div>
                <div className='necessary_wrapper'>
                    <Neccessary/>
                </div>

            </div>}
        </div>
        <Recommendation/>
    </MainLayout>
}

export default Main