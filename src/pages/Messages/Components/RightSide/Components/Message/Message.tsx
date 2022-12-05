import { FC } from "react";
import "./Message.css";

export type MessageType = {
  date: string;
  isNew: boolean;
  text: string;
  type: "send" | "receive";
};

export type MessageProps = {
  chatId: string;
  messages: MessageType[];
};
const Message: FC<MessageProps> = ({ chatId, messages }) => {
  return (
    <div className="messages">
      {messages.map(({ text, type }, index) => (
        <div
          className={`main_message_wrappers ${
            type === "receive" ? "incomming_message" : "send_message"
          }`}
          key={index}
        >
          <p className="base_message_style">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Message;
