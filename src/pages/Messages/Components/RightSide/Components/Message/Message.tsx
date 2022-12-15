import {FC, useEffect, useRef} from "react";
import "./Message.css";

export type MessageType = {
    date: string;
    isNew: boolean;
    text: string;
    type: "send" | "receive";
    src: string
};

export type MessageProps = {
    chatId: string;
    messages: MessageType[];
};
const Message: FC<MessageProps> = ({messages}) => {
    const messageAnchorRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        messageAnchorRef.current?.scrollTo({
            behavior: "smooth",
            top: messageAnchorRef.current?.scrollHeight
        });
    }, [messages])


    return (
        <div ref={messageAnchorRef} className="messages">
            {messages.map(({text, type, src}, index) => {
                // const c2 = !text && src;
                // const c3 = text && !src;


                return (
                    <div
                        className={`main_message_wrappers ${
                            type === "receive" ? "incomming_message" : "send1_message"
                        }`}
                        key={index}
                    >
                        <div className="namak">
                            <p className="base_message_style">{text}</p>
                        </div>

                    </div>
                )
            })}
        </div>
    );
};

export default Message;