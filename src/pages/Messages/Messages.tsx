import MainLayout from "layouts/MainLayout";
import {useParams} from "react-router-dom";
import "./Message.css";
import LeftSide, {ChatType} from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
import EachUserMessage from "./Components/RightSide/Components/EachUserMessage";
import React, {FC, useEffect, useState} from "react";
import { useAppSelector} from "app";
import EachMessage from "./Components/LeftSide/Components/EachMessage";
import {useNavigate} from "react-router";
import SendPopUp from "./Components/SendPopUp";

const Messages: FC = () => {
    const params = useParams();
    const messages = useAppSelector(s => s.messages);
    const [chats,setChats] = useState<ChatType[]>([]);
    const index = messages.findIndex((t)=>t.id === params?.chatId);
    const memberId = messages[index]?.userId;

    useEffect(()=>{
        setChats(messages);
    },[messages])



    const [isPopUp, setPopUp] = useState<boolean>(false);

    const popUpShow = (): void => {
        setPopUp(true);
    }

    const popUpHide = ():void =>{
        setPopUp(false);
    }




  return (
    <MainLayout>
      <section className="message_wrapper">
        <div className="message_container">
          <LeftSide popUpShow={popUpShow}/>
          {params?.chatId ? (
            <EachUserMessage
              chatId={params?.chatId}
              memberId={memberId}
            />
          ) : (
            <RightSide  popUpShow={popUpShow}  />
          )}
            <SendPopUp
                chats={chats}
                isPopUp={isPopUp}
                setChats={setChats}
                messages={messages}
                popUpHide={popUpHide}
            />
        </div>
      </section>
    </MainLayout>
  );
};

export default Messages;
