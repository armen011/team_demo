import './MenuBar.css'
import homeIcon from "../../assets/images/home.png"
import homeIconBold from "../../assets/images/homeBold.png"
import searchIcon from "../../assets/images/search.png";
import searchIconBold from "../../assets/images/searchBold.png";
import messageIcon from "../../assets/images/messenger.png";
import messageIconBold from "../../assets/images/messengerBold.png";
import notificationIcon from "../../assets/images/heart.png";
import notificationIconBold from "../../assets/images/heartBold.png";
import createIcon from "../../assets/images/create.png";
import createIconBold from "../../assets/images/createBold.png";
import userIcon from "../../assets/images/user.png";
import userIconBold from "../../assets/images/userBold.png";
import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import NotificationSideBar from "../NotificationSideBar";
import SearchSideBar from "../SearchSideBar";
import MinBar from "../MinBar";
import AppBar from "../AppBar";


type Props = {
    routeInfo: string
}

const MenuBar: FC<Props> = ({routeInfo}) => {
    const categoryParts = [
        {
            img: homeIcon,
            imgBold: homeIconBold,
            text: "Home",
            id: 1,
            isActive: false,
            path: '/',
            isRoutable: true
        },
        {
            img: searchIcon,
            imgBold: searchIconBold,
            text: "Search",
            id: 2,
            isActive: false,
            path: '/',
            isRoutable: false
        },
        {
            img: messageIcon,
            imgBold: messageIconBold,
            text: "Messages",
            id: 3,
            isActive: false,
            path: '/messages',
            isRoutable: true
        },
        {
            img: notificationIcon,
            imgBold: notificationIconBold,
            text: "Notification",
            id: 4,
            isActive: false,
            path: '/',
            isRoutable: false
        },
        {
            img: createIcon,
            imgBold: createIconBold,
            text: "Create",
            id: 5,
            isActive: false,
            path: '/',
            isRoutable: false
        },
        {
            img: userIcon,
            imgBold: userIconBold,
            text: "Profile",
            id: 6,
            isActive: false,
            path: '/profile',
            isRoutable: true
        },
    ]
    switch (true) {
        case routeInfo === 'Home': {
            categoryParts.forEach(elem => {
                if (elem.text === 'Home') {
                    elem.isActive = true
                }
            })
            break;
        }
        case routeInfo === 'Messages' || routeInfo === '' : {
            categoryParts.forEach(elem => {
                if (elem.text === 'Messages') {
                    elem.isActive = true
                }
            })
            break;
        }
        case routeInfo === 'Profile': {
            categoryParts.forEach(elem => {
                if (elem.text === 'Profile') {
                    elem.isActive = true
                }
            })
            break
        }
    }
    const [not, setNot] = useState<boolean>(false)
    const [search, setSearch] = useState<boolean>(false)
    const [category, setCategory] = useState(categoryParts)
    const navigate = useNavigate()


    const handleActiveClick = (id: number, text: string) => {

        if (text === 'Notification') {
            setNot(true);
            setSearch(false)
        } else if (text === 'Search') {
            setSearch(true)
            setNot(false);
        } else {
            setNot(false);
            setSearch(false);
        }


        setCategory(prevState => prevState.map(elem => {
            if (elem.id === id) {
                if (!elem.isActive) {
                    elem.isActive = true
                }
            } else {
                elem.isActive = false
            }
            return elem
        }))
    }

    const handleRouteClick = (route: string, text: string) => {
        navigate(route, {state: {text}})
    }




    return (
        <>
            {not || search ?
                <MinBar handleActiveClick={handleActiveClick} handleRouteClick={handleRouteClick} category={category}/>
                :
                <AppBar handleActiveClick={handleActiveClick} handleRouteClick={handleRouteClick} category={category}/>
            }

            <MinBar handleActiveClick={handleActiveClick} handleRouteClick={handleRouteClick} category={category}/>

            {not && <NotificationSideBar/>}

            {search && <SearchSideBar/>}
        </>
    )
}

export default MenuBar