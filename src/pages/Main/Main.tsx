import MainLayout from "layouts/MainLayout"
import Recommendation from "components/Recommendation";

import PostComponent from "./PostComponent"
import { useAppDispatch, useAppSelector } from "app";
import { onePost, Tpost } from "./PostComponent/PostComponent";
import { useEffect } from "react";
import { getPosts } from "features/getPost";




const Main=()=>{


    const dispatch = useAppDispatch()
    const {_id} = useAppSelector((state)=>state.user)

    useEffect(()=>{
        dispatch(getPosts(_id || ""))
    },[])

    const usersPosts = useAppSelector((p)=>{
        return p.getPosts
    })





    return <MainLayout>
            <Recommendation/>
        <div className="user_post_container">

            {usersPosts.map((post:onePost)=>{
                return <PostComponent key={Math.random()} post={post}/>
            })}
        </div>
    </MainLayout>
}

export default Main