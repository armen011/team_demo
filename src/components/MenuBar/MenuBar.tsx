import "./MenuBar.css";
import homeIcon from "assets/images/home.png";
import homeIconBold from "assets/images/homeBold.png";
import searchIcon from "assets/images/search.png";
import searchIconBold from "assets/images/searchBold.png";
import messageIcon from "assets/images/messenger.png";
import messageIconBold from "assets/images/messengerBold.png";
import notificationIcon from "assets/images/heart.png";
import notificationIconBold from "assets/images/heartBold.png";
import createIcon from "assets/images/create.png";
import createIconBold from "assets/images/createBold.png";
import userIcon from "assets/images/user.png";
import userIconBold from "assets/images/userBold.png";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import CreateModal from "components/CreateModal";
import NotificationSideBar from "../NotificationSideBar";
import SearchSideBar from "../SearchSideBar";
import MinBar from "../MinBar";
import AppBar from "../AppBar";
import {context} from "../../AppContainer/App";

const MenuBar = () => {
  const categoryParts = [
    {
      img: homeIcon,
      imgBold: homeIconBold,
      text: "Home",
      id: 1,
      isActive: false,
      path: "/",
      isRoutable: true,
    },
    {
      img: searchIcon,
      imgBold: searchIconBold,
      text: "Search",
      id: 2,
      isActive: false,
      path: "/",
      isRoutable: false,
    },
    {
      img: messageIcon,
      imgBold: messageIconBold,
      text: "Messages",
      id: 3,
      isActive: false,
      path: "/messages",
      isRoutable: true,
    },
    {
      img: notificationIcon,
      imgBold: notificationIconBold,
      text: "Notification",
      id: 4,
      isActive: false,
      path: "/",
      isRoutable: false,
    },
    {
      img: createIcon,
      imgBold: createIconBold,
      text: "Create",
      id: 5,
      isActive: false,
      path: "/",
      isRoutable: false,
    },
    {
      img: userIcon,
      imgBold: userIconBold,
      text: "Profile",
      id: 6,
      isActive: false,
      path: "/profile",
      isRoutable: true,
    },
  ];
  switch (true) {
    case window.location.pathname === '/' : {
      categoryParts.forEach((elem) => {
        if (elem.text === "Home") {
          elem.isActive = true;
        }
      });
      break;
    }
    case window.location.pathname === '/messages': {
      categoryParts.forEach((elem) => {
        if (elem.text === "Messages") {
          elem.isActive = true;
        }
      });
      break;
    }
    case window.location.pathname === "/profile": {
      categoryParts.forEach((elem) => {
        if (elem.text === "Profile") {
          elem.isActive = true;
        }
      });
      break;
    }
  }
  const [not, setNot] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [category, setCategory] = useState(categoryParts);
  const navigate = useNavigate();
  const createPopUpContext = useContext(context)
  const handleCloseModal = () => {
    createPopUpContext?.setIsCreateModalOpened(false);
  };

  const handleActiveClick = (id: number, text: string) => {
    if (text === "Notification") {
      setNot(true);
      setSearch(false);
    } else if (text === "Search") {
      setSearch(true);
      setNot(false);
    } else if (text === "Create") {
      createPopUpContext?.setIsCreateModalOpened(true);
      setSearch(false);
      setNot(false);
    } else {
      setNot(false);
      setSearch(false);
    }

    setCategory((prevState) =>
      prevState.map((elem) => {
        if (elem.id === id) {
          if (!elem.isActive) {
            elem.isActive = true;
          }
        } else {
          elem.isActive = false;
        }
        return elem;
      })
    );
  };

  const handleRouteClick = (route: string, text: string) => {
    navigate(route, { state: { text } });
  };

  return (
    <>
      {not || search ?
      <div className='close_search_notification' onClick={() => {
        setNot(false)
        setSearch(false)
      }}>
      </div>
          : null}
      {not || search ? (
        <MinBar
          handleActiveClick={handleActiveClick}
          handleRouteClick={handleRouteClick}
          category={category}
        />
      ) : (
        <AppBar
          handleActiveClick={handleActiveClick}
          handleRouteClick={handleRouteClick}
          category={category}
        />
      )}

      <MinBar
        handleActiveClick={handleActiveClick}
        handleRouteClick={handleRouteClick}
        category={category}
      />
      {not && <NotificationSideBar />}
      {createPopUpContext?.isCreateModalOpened && (
        <CreateModal handleCloseModal={handleCloseModal} />
      )}
      {search && <SearchSideBar />}
    </>
  );
};

export default MenuBar;
