import React, {FC, useState} from "react";
import {useAppSelector} from "../../app";
import {useParams} from "react-router-dom";

type TFollow = {
    id: string | undefined
}
const Follow:FC<TFollow> = ({id}) => {
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;
    const [follow, setFollow] = useState<boolean>(false)
    const creatorId = useAppSelector(state => state.user._id)

    const handleFollowToggle = () => {
        setFollow(!follow)
        fetch(`${baseUrl}api/users/${creatorId}/${follow ? 'unfollow' : 'follow'}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: id
            })
        }).then(res=> res.json()).then(res=> console.log(res, 'FOLLOW RES'))
    }

    return (
        <>
            {!follow ? <button className='follow_from_recommendation' onClick={handleFollowToggle}> Follow </button>
                :
                <button className='following_from_recommendation' onClick={handleFollowToggle}> Following </button>
            }
        </>
    )
}

export default Follow