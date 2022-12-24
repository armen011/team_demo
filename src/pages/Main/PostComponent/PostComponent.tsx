import {FC, useCallback, useState} from "react";
import ContentBox from "../Components/ContentBox";
import HeaderPostComponent from "../Components/HeaderPostComponent";
import PostImages from "../Components/PostImages";
import ReactionBar from "../Components/ReactionBar";
import "./PostComponent.css";
import {useAppSelector} from "../../../app";


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

    const handleDoubleClick = () => {
        if (!redHeartB) {
            setRedHeartB(true)
        }
    }
    const handleChangeHeart = () => {
        setRedHeartB(!redHeartB)
    }

    return (
        <div className="post_component_wrapper">
            <HeaderPostComponent userId={post._doc.userId}  postId={postId}/>
            <PostImages handleDoubleClick={handleDoubleClick} images={post.images}/>
            <ReactionBar redHeartB={redHeartB} handleChangeHeart={handleChangeHeart}/>
            <ContentBox doc={post._doc}/>
        </div>
    );
};

export default PostComponent;
