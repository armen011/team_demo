import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import deleteIcon from "assets/images/delete.png";
import userIcon from "assets/images/user.png";
import './SearchSideBar.css'
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

export type TData = {
    fullName: string,
    id: string,
    img: string,
    username: string
}

type TProps = {
    handleRecentFunc: Dispatch<SetStateAction<TData[]>>
    recent: TData[]
}

const SearchSideBar:FC<TProps> = ({recent, handleRecentFunc}) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e: { target: HTMLInputElement }) => {
        setInputValue(e.target.value)
    }
    const [users, setUsers] = useState<TData[]>([])
    const useDeBounce = (inputVal: string) => {
        useEffect(() => {
            const bounceDelay = setTimeout(() => {
                fetch(
                    `http://localhost:8800/api/users?query=${inputVal}`,
                    {
                        method: "GET",
                        headers: {"Content-Type": "application/json"},
                    })
                    .then((res) => res.json()).then(res => {
                    if (inputVal.trim()) {
                        setUsers(res)
                    } else {
                        setUsers([])
                    }
                })
            }, 400)
            return () => {
                clearInterval(bounceDelay)
            }
        }, [inputVal])
    }
    useDeBounce(inputValue)
    const {t} = useTranslation()
    const navigate = useNavigate()
    const addingRecent = (recentUser: TData) => {
        handleRecentFunc(prevState => [...prevState, recentUser])
    }
    
    const handleUserRedirect = (route: string) => {
        setTimeout(() => {
            navigate(`/users/${route}`)
        }, 0)
    }
    const clearAllRecent = () => {
        handleRecentFunc([])
    }
    const handleDeleteRecent = (id: string) => {
        handleRecentFunc(prevState => prevState.filter(elem=> elem.id !== id))
    }
    const placeholder = t('Search');

    return (
        <div className={'search-part'}>
            <div className={'search-upper-part'}>
                <div className={'search-section'}>{t('Search')}</div>
                <div className={'search-input-part'}>
                    <input value={inputValue} onChange={handleInputChange} type="text" placeholder={placeholder}/>
                    <img className='clear_search' style={{display: inputValue.trim() ? 'block' : 'none'}}
                         src={deleteIcon} onClick={() => setInputValue('')} alt=""/>
                </div>
            </div>

            <div className={'search-main-part'}>
                <div className={'search-instruction-part'}>
                    <span style={{fontSize: '14px'}}>{t('Recent')}</span>
                    <span onClick={clearAllRecent} className={'clear-searches-button'}>{t('Clear all')}</span>
                </div>
                <div className={'search-singleUser-part'}>

                    {inputValue.trim() ?
                        <div>
                            {users.length ? users.map(u => <div onClick={() => {
                                addingRecent(u)
                                handleUserRedirect(u.id)
                            }}
                                                                key={u.id} className='single-search-user'>
                                <div className={'single-search-icon-part'}>
                                    <div className='user_image_wrapper'>
                                        <img className='user_image' src={u.img ? u.img : userIcon} alt="userIcon"/>
                                    </div>
                                </div>
                                <div className={'single-search-text-part'}>
                                    <div>{u.username}</div>
                                    <div>{u.fullName}</div>
                                </div>
                            </div>) : null}
                        </div>
                        :
                        <div>
                            {recent ? recent.map(recU => <div
                                key={recU.id} className='single-search-user'>
                                <div className={'single-search-icon-part'} onClick={() => {
                                    addingRecent(recU)
                                    handleUserRedirect(recU.id)
                                }
                                }>
                                    <div className='user_image_wrapper'>
                                        <img className='user_image' src={recU.img ? recU.img : userIcon}
                                             alt="userIcon"/>
                                    </div>
                                </div>
                                <div className={'single-search-text-part'} onClick={() => {
                                    addingRecent(recU)
                                    handleUserRedirect(recU.id)
                                }
                                }>
                                    <div>{recU.username}</div>
                                    <div>{recU.fullName}</div>
                                </div>
                                <div className='single-search-delete-part'>
                                    <img style={{width: '15px'}} onClick={() => handleDeleteRecent(recU.id)}
                                         src={deleteIcon} alt=""/>
                                </div>
                            </div>) : null}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchSideBar;