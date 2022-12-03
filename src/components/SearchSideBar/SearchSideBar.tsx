import React, {useState} from 'react';
import deleteIcon from "../../assets/images/delete.png";
import './SearchSideBar.css'
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

const SearchSideBar = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const usersArr = [
        {
            userName: 'John Wick',
            nickName: 'Jonny',
            image: 'https://static.tvtropes.org/pmwiki/pub/images/2d3b418cd08e4e1ee3a87a399d17bcd1.jpg',
            id: 1
        },
        {
            userName: 'Will Smith',
            nickName: 'Sm_Will',
            image: 'https://m.media-amazon.com/images/M/MV5BMTExNDIwNjQyMjVeQTJeQWpwZ15BbWU3MDUyNTA2NzE@._V1_.jpg',
            id: 2
        },
        {
            userName: 'Robbert de Niro',
            nickName: 'Robby_N',
            image: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F020945f8-016f-11ea-a5c6-614c29c2a639.jpg?crop=3711%2C2087%2C53%2C16',
            id: 3
        },
        {
            userName: 'Pablo Escobar',
            nickName: 'cocaine',
            image: 'https://media.vogue.fr/photos/5c3706c451fe633a64210335/master/w_1600%2Cc_limit/narcos_1678.jpeg?lang=eng',
            id: 4
        },
        {
            userName: 'Adolf Hitler',
            nickName: 'fashist',
            image: 'https://historycouk.s3.eu-west-2.amazonaws.com/s3fs-public/2022-07/adolf-hitler-nazi-salute.jpg',
            id: 5
        },
        {
            userName: 'Jonny Dep',
            nickName: 'Pirate_Jonny',
            image: 'https://images.indianexpress.com/2022/06/pirates-of-the-caribbean-johnny-depp-1200.jpg',
            id: 6
        },
        {
            userName: 'Jeff Bezos',
            nickName: 'Billionaire',
            image: 'https://image.cnbcfm.com/api/v1/image/107002692-1642530190910-gettyimages-1353159820-baby017_2021111393933391.jpeg?v=1668617938&w=929&h=523&vtcrop=y',
            id: 7
        },

    ]
    const [inputValue, setInputValue] = useState('')
    const [users, setUsers] = useState(usersArr)
    const handleInputChange = (e: { target: HTMLInputElement }) => {
        setInputValue(e.target.value)
    }
    const handleDeleteUser = (id: number) => {
        setUsers(prevState => prevState.filter(user => user.id !== id))
    }
    const handleUserRedirect = (route: string) => {
        navigate(`${route}`)
    }
    const clearAll = () => {
        setUsers([])
    }
    const placeholder = t('Search')

    return (
        <div className={'search-part'}>
            <div className={'search-upper-part'}>
                <div className={'search-section'}>{t('Search')}</div>
                <div className={'search-input-part'}>
                    <input value={inputValue} onChange={handleInputChange} type="text" placeholder={placeholder}/>
                    <img className='clear_search' style={{display: inputValue.trim() ? 'block' : 'none'}} src={deleteIcon} onClick={() => setInputValue('')} alt=""/>
                </div>
            </div>

            <div className={'search-main-part'}>
                <div className={'search-instruction-part'}>
                    <span style={{fontSize: '14px'}}>{t('Recent')}</span>
                    <span onClick={clearAll} className={'clear-searches-button'}>{t('Clear all')}</span>
                </div>
                <div className={'search-singleUser-part'}>

                    {users.filter(elem => elem.userName.toLowerCase().includes(inputValue.toLowerCase())).map(u => <div
                        key={u.id} className='single-search-user'>

                        <div className={'single-search-icon-part'} onClick={() => handleUserRedirect(u.userName)}>
                            <div className='user_image_wrapper'>
                                <img className='user_image' src={u.image} alt="userIcon"/>
                            </div>
                        </div>
                        <div className={'single-search-text-part'} onClick={() => handleUserRedirect(u.userName)}>
                            <div>{u.userName}</div>
                            <div>{u.nickName}</div>
                        </div>
                        <div className={'single-search-delete-part'}>
                            <img onClick={() => handleDeleteUser(u.id)} style={{width: '15px'}} src={deleteIcon}
                                 alt=""/>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default SearchSideBar;