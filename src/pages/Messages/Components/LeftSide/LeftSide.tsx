import "./leftSide.css";
import down_icon from "images/down_icon/down-chevron-svgrepo-com.svg";
import EachMessage, { EachMessageProps } from "./Components/EachMessage";
import { FC, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAppSelector } from "app";
import { setConstantValue } from "typescript";

export type ChatType = {
  id: string;
  picture: string;
  title: string;
};

const LeftSide: FC = () => {
  const baseUrl = process.env.REACT_APP_PUBLIC_URL;
  const userId = useAppSelector((state) => state.user._id);
  const [chats, setChat] = useState<ChatType[]>([]);

  // const socket = io(`${baseUrl}`)
  // socket.on('connected',()=>{
  //     socket.emit('setUserId','6388cdb311c53d0f60b8f0ba')
  // })
  // socket.on('newMessage',(data:string)=>{
  //     console.log('data',data)
  // })

  // useEffect(() => {
  //     fetch(
  //         `${baseUrl}api/chat`,
  //         {
  //             method: "POST",
  //             headers: {"Content-Type": "application/json"},
  //             body: JSON.stringify({creatorId: "637d5ead3f67cf483f972a31", memberId: "6388cdb311c53d0f60b8f0ba"})
  //         }
  //     )
  //         .then((res) => res.json()).then(res => {
  //         console.log("RES", res)
  //     })
  // }, [])

  useEffect(() => {
    if (userId) {
    }
    fetch(`http://localhost:8800/api/chat?user_id=${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res: ChatType[]) => {
        setChat(res);
      });
  }, [userId]);

  return (
    <div className="left_side">
      <div className="left_side_header">
        <div>
          <div></div>
          <div>
            <div>
              <div className="user_name_field">hovhannisyan0010</div>
            </div>
            <div>
              <img src={down_icon} alt="down_icon" />
            </div>
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1039560433381670961/1048325769312604221/pngegg.png"
              alt="edit"
            />
          </div>
        </div>
      </div>
      <div className="left_side_nav">
        <nav>
          <div className="nav_primary">
            <p>Primary</p>
          </div>
          <div className="nav_general">
            <p>General</p>
          </div>
        </nav>
        <div></div>
      </div>
      <div className="messages_section">
        <div>
          {chats.map(({ title, picture, id }, index) => (
            <EachMessage
              receiverName={title}
              message="asdsaasd"
              img={picture}
              key={index}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
