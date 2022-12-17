import EachMessage from "../LeftSide/Components/EachMessage";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {useNavigate} from "react-router";
import {ChatType} from "../LeftSide";
import "./SendPopUp.css"


type TSendPopUpProps = {
    isPopUp: boolean;
    popUpHide: () => void;
    chats: ChatType[];
    setChats: Dispatch<SetStateAction<ChatType[]>>;
    messages: ChatType[];
}

const SendPopUp: FC<TSendPopUpProps> = ({isPopUp, popUpHide, chats, setChats, messages}) => {
    const navigate = useNavigate();
    const [input, setInput] = useState<string>('');


    const handleChange = (e: { target: HTMLInputElement }): void => {
        setInput(e.target.value);

        let updatedList = [...messages];
        updatedList = updatedList.filter((chat) => (chat.title.includes(e.target.value)))
        setChats(updatedList);
    }


    return isPopUp ? <div className="pop_up_wrapper" onClick={popUpHide}>
        <div className="message_pop_up"
             onClick={(event) => {
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
                </div>
            </div>
            <div className="search_to_message">
                <div className="To">
                    <h4>To: </h4>
                </div>
                <div className="search_chat">
                    <input type="text"
                           value={input}
                           onChange={handleChange}
                           placeholder="Search..."
                    />
                </div>
            </div>
            <div className="suggested_wrapper">
                <div className="suggested">
                    <h4>Suggested</h4>
                </div>
                <div className="chats">
                    {chats.map(({title, picture, id, userId}, index) => {
                        if (id === userId) {
                            navigate(`messages/${id}`)
                        }
                        return <EachMessage
                            popUpHide={popUpHide}
                            receiverName={title}
                            userId={userId}
                            img={picture}
                            key={index}
                            id={id}
                        />
                    })}
                </div>
            </div>
        </div>
    </div> : null;

}


export default SendPopUp;
