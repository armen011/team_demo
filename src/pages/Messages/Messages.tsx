import EachUserMessage from "./Components/RightSide/Components/EachUserMessage";
import LeftSide, {ChatType} from "./Components/LeftSide";
import React, {FC, useEffect, useState} from "react";
import RightSide from "./Components/RightSide";
import SendPopUp from "./Components/SendPopUp";
import {useParams} from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import { useAppSelector} from "app";
import "./Message.css";

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
