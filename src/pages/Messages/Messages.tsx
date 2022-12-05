import MainLayout from "layouts/MainLayout"
import {useLocation} from "react-router-dom";
import './Message.css';
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
import {useState} from "react";
import EachUserMessage from "./Components/RightSide/Components/EachUserMessage";


const Messages = () => {
    const {state: {text}} = useLocation();
    const [isMessage,set] = useState<boolean>(false);


    return (<MainLayout routeInfo={text}>
            <section className="message_wrapper">
                <div className="message_container">
                    <LeftSide/>
                    {!isMessage ? <RightSide/> : <EachUserMessage/>}
                </div>
            </section>
        </MainLayout>
    )
}

export default Messages
