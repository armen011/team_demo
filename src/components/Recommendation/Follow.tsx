import React, {FC, useState} from "react";
import {useAppSelector} from "../../app";
import {useTranslation} from "react-i18next";

type TFollow = {
    id: string | undefined
}
const Follow:FC<TFollow> = ({id}) => {
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;
    const [follow, setFollow] = useState<boolean>(false)
    const creatorId = useAppSelector(state => state.user._id)

    const handleFollowToggle = () => {
        setFollow(!follow)
        fetch(`${baseUrl}api/users/${id}/${follow ? 'unfollow' : 'follow'}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: creatorId
            })
        }).then(res=> res.json()).then(res=> console.log(res, 'FOLLOW RES'))
    }
    const {t} = useTranslation()

    return (
        <>
            {!follow ? <button className='follow_from_recommendation' onClick={handleFollowToggle}> {t('Follow')} </button>
                :
                <button className='following_from_recommendation' onClick={handleFollowToggle}> {t('Unfollow')} </button>
            }
        </>
    )
}

export default Follow