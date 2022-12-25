import './Recommendation.css'
import userIcon from 'assets/images/user.png'
import {useAppSelector} from "../../app";
import MiniFooter from "../MiniFooter";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {TData} from "../SearchSideBar/SearchSideBar";
import Follow from "./Follow";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import {context} from "../../AppContainer/App";
const Recommendation = () => {
    const user = useAppSelector(state => state.user)
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [allUsers, setAllUsers] = useState<TData[]>([])
    const [language, setLanguage] = useState(false)
    const creatorId = useAppSelector(state => state.user._id)
    const [followersArray, setFollowersArray] = useState([])
    useEffect(() => {
        fetch(
            `http://localhost:8800/api/users/${creatorId}`,
            {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            .then((res) => res.json()).then(res => setFollowersArray(res.followers))
    }, [])

    useEffect(() => {
        fetch(
            `http://localhost:8800/api/users?query=`,
            {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            }).then(res => res.json()).then(res =>setAllUsers(res))
    }, [])

    const randomizer = useCallback((arr: TData[]): TData[] => {
        const copyArr = Array.from(arr)
        const newArr = copyArr.sort(() => Math.random() - 0.5)
        followersArray.forEach(elem => {
            const index = newArr.findIndex(val => val?.id === elem)
            newArr.splice(index, 1)
        })
        const resultArr: TData[] = []
        if (newArr.length) {
            for (let i = 0; i < 6; i++) {
                if (newArr[i]?.id !== creatorId) {
                    resultArr.push(newArr[i])
                }
            }
        }
        return resultArr;
    }, [followersArray])


    const createPopupContext = useContext(context)

    return (
        <div className='recommendation_wrapper'>
            <div className='recommendation_profile' onClick={() => navigate('/profile')}>
                <img className='recommendation_profile_image' src={userIcon} alt=""/>
                <div className='recommendation_profile_info'>
                    <p style={{fontWeight: 600, fontSize: '14px'}}>{user.username}</p>
                    <p style={{fontWeight: 'lighter', color: 'gray', fontSize: '14px'}}>{user.fullName}</p>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                <h5 style={{color: '#8E8E8E', marginBottom: '15px', fontSize: '14px'}}>{t('Suggestions For You')}</h5>
                <p className='see_all_recommendation'>{t('See All')}</p>
            </div>

            {allUsers && randomizer(allUsers).map(elem => {
                if (elem) {
                    return <div key={Math.random()} style={{display: "flex"}}>
                        <div className='recommendation_users' onClick={() => navigate(`/users/${elem.id}`)}>
                            <img className='recommendation_users_image' src={elem.img ? elem.img : userIcon} alt=""/>
                            <div>
                                <p style={{
                                    fontSize: '14px',
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}>{elem?.username}</p>
                                <p style={{fontSize: '12px', color: "gray", cursor: "pointer"}}>{elem.fullName}</p>
                            </div>
                        </div>
                        <Follow id={elem.id}/>
                    </div>
                }
            })}
            <MiniFooter language={language} setLanguage={setLanguage}/>
        </div>
    )
}

export default Recommendation;
