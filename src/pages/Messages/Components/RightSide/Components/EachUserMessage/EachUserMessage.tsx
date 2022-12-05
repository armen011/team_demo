import "./EachUserMessage.css";
import Message, { MessageType } from "../Message";
import smile from "images/smile/smile.png";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import i_icon from "images/i_icon/information.png";
import user from "images/user_icon/man 1 (Traced).svg";
import picture_icon from "images/picture_icon/image.png";
import { useAppSelector } from "app";
import Socket from "socket";
import { SocketContext } from "socket/Provider";

export type EachUserMessageProps = {
  chatId: string;
  memberId: string;
};

const EachUserMessage: FC<EachUserMessageProps> = ({ chatId, memberId }) => {
  const [inputVal, setVal] = useState<string>("");
  const { useSocket } = Socket;
  const { send, listen } = useSocket();
  const userId = useAppSelector((state) => state.user._id);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    fetch(`http://localhost:8800/api/chat/messages/${chatId}/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
      { date: "now", isNew: false, text: inputVal, type: "send" },
    ]);
    setVal("");
  }, [inputVal, memberId, userId, chatId, send]);

  return (
    <section className="each_user_message">
      <div>
        <div>
          <img className="i_icon" src={user} alt="user_image" />
          <h5>yardages</h5>
        </div>
        <div>
          <img className="i_icon" src={i_icon} alt="i_icon" />
        </div>
      </div>

      <div className="each_user_message_context">
        <div>
          <div className="message_field">
            <Message {...{ chatId, messages }} />
          </div>
        </div>

        <div>
          <div>
            <div>
              <div className="input_smile_div">
                <div>
                  <img src={smile} alt="smile" className="smile" />
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
              <div onClick={handleSendMessage}>
                <img
                  src={picture_icon}
                  alt="picture_icon"
                  className="picture_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EachUserMessage;
