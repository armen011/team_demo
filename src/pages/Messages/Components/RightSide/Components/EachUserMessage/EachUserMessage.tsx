import "./EachUserMessage.css";
import Message, {MessageType} from "../Message";
import smile from "images/smile/smile.png";
import {FC, useCallback, useEffect, useState} from "react";
import i_icon from "images/i_icon/information.png";
import user from "images/user_icon/man 1 (Traced).svg";
import picture_icon from "images/picture_icon/image.png";
import {useAppSelector} from "app";
import Socket from "socket";

export type EachUserMessageProps = {
    chatId: string;
    memberId?: string;
};

const EachUserMessage: FC<EachUserMessageProps> = ({chatId, memberId}) => {
    const [inputVal, setVal] = useState<string>("");
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;
    const {useSocket} = Socket;
    const {send, listen} = useSocket();
    const userId = useAppSelector((state) => state.user._id);
    const [messages, setMessages] = useState<MessageType[]>([]);

    const chats = useAppSelector(s => s.messages);
    const index = chats.findIndex(t => t.id === chatId);


    useEffect(() => {
        fetch(`${baseUrl}api/chat/messages/${chatId}/${userId}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
            .then((res) => res.json())
            .then((res: MessageType[]) => {
                setMessages(res);
            });
        listen("newMessage", (data: MessageType) => {
            setMessages((prev) => [...prev, data]);
        });
    }, [chatId, userId]);

    const handleSendMessage = useCallback(() => {
        send("sendMessage", {
            to: memberId,
            from: userId,
            chatId,
            text: inputVal,
        });
        setMessages((prev) => [
            ...prev,
            {date: "now", isNew: false, text: inputVal, type: "send"},
        ]);
        setVal("");
    }, [inputVal, memberId, userId, chatId, send]);

    const handleFormMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSendMessage();
    }


    return (
        <section className="each_user_message">
            <div>
                <div>
                    <img className="i_icon" src={chats[index]?.picture || user} alt="user_image"/>
                    <h5>{chats[index]?.title}</h5>
                </div>
                <div>
                    <img className="i_icon" src={i_icon} alt="i_icon"/>
                </div>
            </div>

            <div className="each_user_message_context">
                <div>
                    <div className="message_field">
                        <Message {...{chatId, messages}} />
                    </div>
                </div>

                <form onSubmit={handleFormMessage}>
                    <div>
                        <div>
                            <div className="input_smile_div">
                                <div>
                                    <img src={smile} alt="smile" className="smile"/>
                                </div>
                                <div className="textarea">
                                    <input
                                        placeholder="Message..."
                                        onChange={(e) => {
                                            setVal(e.target.value);
                                        }}
                                        value={inputVal}
                                    />
                                </div>
                            </div>
                            <div  className="send">
                                {!(inputVal.length > 0) ? <div>
                                    <img
                                        src={picture_icon}
                                        alt="picture_icon"
                                        className="picture_icon"
                                    />
                                    <input type="file" className="send_picture"/>
                                </div> : <p onClick={handleSendMessage}>Send</p>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EachUserMessage;