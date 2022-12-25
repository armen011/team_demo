import {FC, useEffect, useState} from "react";
import ContentBox from "../Components/ContentBox";
import HeaderPostComponent from "../Components/HeaderPostComponent";
import PostImages from "../Components/PostImages";
import ReactionBar from "../Components/ReactionBar";
import "./PostComponent.css";
import {useAppSelector} from "../../../app";
import {TUserState} from "../../EachUserProfile/EachUserProfile";


export type Timages = { file: string, style: { filter?: string, scale?: string } }[]
export type T_doc = {
    createdAt: string,
    desc: string,
    img: string[]
    likes: []
    updatedAt: string,
    userId: string
    __v: number
    _id: string

}

export type Tpost = Array<{
    images: Timages,
    _doc: T_doc
}>

export type onePost = {
    images: Timages,
    _doc: T_doc
}

const PostComponent: FC<{ post: onePost, postId: string }> = ({post, postId}) => {

    const [redHeartB, setRedHeartB] = useState(false);
    const userId = useAppSelector(s => s.user._id);
    const [likesCount, setLikesCount] = useState<number>()
    const handleLikeToggle = () => {
        redHeartB ? setLikesCount(-1) : setLikesCount(+1)
    }

    const handleDoubleClick = () => {
        if (!redHeartB) {
            setRedHeartB(true)
        }
    }
    const handleChangeHeart = () => {
        setRedHeartB(!redHeartB)
        handleLikeToggle()
    }

    useEffect(() => {
        const likeArr = post?._doc.likes.some(elem=> elem === userId);
        if (likeArr) {
            setRedHeartB(true)
        }
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8800/api/posts/${postId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(res => setLikesCount(res.likes.length))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8800/api/posts/${postId}/like`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId
            })
        }).then(r => r.json()).then((r) => {
            console.log(r);
        }).catch((e) => console.log(e))
    }, )


    return (
        <div className="post_component_wrapper">
            <HeaderPostComponent userId={post._doc.userId} postId={postId}/>
            <PostImages handleDoubleClick={handleDoubleClick} images={post.images}/>
            <ReactionBar redHeartB={redHeartB} handleChangeHeart={handleChangeHeart}/>
            <ContentBox likesLength={likesCount} doc={post._doc}/>
        </div>
    );
};

export default PostComponent;
