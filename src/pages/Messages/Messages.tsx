import MainLayout from "layouts/MainLayout"
import {useLocation} from "react-router-dom";
import './Message.css';
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";


const Messages = () => {
    const {state: {text}} = useLocation();


    return (<MainLayout routeInfo={text}>
            <div className="message_wrapper">
                <div className="message_container">
                    <LeftSide/>
                    <RightSide/>
                </div>
            </div>
        </MainLayout>
    )
}

export default Messages
