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

const Messages: FC = () => {
    const params = useParams();
    const messages = useAppSelector(s => s.messages);

    const [chats,setChats] = useState<ChatType[]>([]);

    const index = messages.findIndex((t)=>t.id === params?.chatId);
    const memberId = messages[index]?.userId;

    useEffect(()=>{
        setChats(messages);
    },[messages])


    const [input,setInput] = useState<string>('');

    const [isPopUp, setPopUp] = useState<boolean>(false);

    const popUpShow = (): void => {
        setPopUp(true);
    }
    const handleChange = (e:{target:HTMLInputElement}):void=>{
        setInput(e.target.value);

        let updatedList = [...messages];
        updatedList = updatedList.filter((chat) => (chat.title.includes(e.target.value)))
        setChats(updatedList);
    }
    const popUpHide = ():void =>{
        setPopUp(false);
    }

    const navigate = useNavigate();



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
            {isPopUp && <div className="pop_up_wrapper" onClick={popUpHide}>
                <div className="message_pop_up" onClick={(event) => {
                    event.stopPropagation()
                }
                }>
                    <div className="pop_up_header">
                        <div className="X">
                            <button>X</button>
                        </div>
                        <div className="new_message">
                            <h3>New message</h3>
                        </div>
                        <div className="next_message">
                            <button>Next</button>
                        </div>
                    </div>
                    <div className="search_to_message">
                        <div className="To">
                            <h4>To: </h4>
                        </div>
                        <div className="search_chat">
                            <input type="text" placeholder="Search..." value={input} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="suggested_wrapper">
                        <div className="suggested"><h4>Suggested</h4></div>
                        <div className="chats">
                            {chats.map(({title, picture, id, userId}, index) => {
                                if (id === userId){
                                    navigate(`messages/${id}`)
                                }
                                return <EachMessage
                                    receiverName={title}
                                    message="yardages"
                                    popUpHide={popUpHide}
                                    userId={userId}
                                    img={picture}
                                    key={index}
                                    id={id}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
      </section>
    </MainLayout>
  );
};

export default Messages;
