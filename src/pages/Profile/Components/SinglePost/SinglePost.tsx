import './SinglePost.css'
import {FC} from "react";

export type SinglePostType={
    image:string
}

const SinglePost:FC<SinglePostType> = ({image})=>{
    return(
        <div className={'single_post'}>
            <img src={image} alt=""/>
        </div>
    )
}

export default SinglePost