import './Recommendation.css'
import userIcon from  'assets/images/user.png'
import {useAppSelector} from "../../app";
import MiniFooter from "../MiniFooter";
import React, {useEffect, useState} from "react";
import {TData} from "../SearchSideBar/SearchSideBar";
import Follow from "./Follow";
import {useTranslation} from "react-i18next";

const Recommendation = () => {
    const user = useAppSelector(state => state.user)
    const [allUsers, setAllUsers] = useState<TData[]>([])
    const [language, setLanguage] = useState(false)

    useEffect(() => {
        fetch(
            `http://localhost:8800/api/users?query=`,
            {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            }).then(res=> res.json()).then(res=> setAllUsers(res))
    }, [])

    const randomizer = (arr: TData[]): TData[] => {
        const newArr = arr.sort(() => Math.random() - 0.5)
        const resultArr: TData[] = []
        for (let i = 0; i < 5; i++){
            resultArr.push(newArr[i])
        }
        return resultArr;
    }
    const {t, i18n} = useTranslation()



    return (
        <div className='recommendation_wrapper'>
            <div className='recommendation_profile'>
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
                        <div className='recommendation_users'>
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
