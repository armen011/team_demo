import './leftSide.css';
import down_icon from 'images/down_icon/down-chevron-svgrepo-com.svg'
import EachMessage from "./Components/EachMessage";
import {FC, useEffect} from "react";
import io from "socket.io-client";


const LeftSide: FC = () => {
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;

    // const socket = io(`${baseUrl}`)
    // socket.on('connected',()=>{
    //     socket.emit('setUserId','6388cdb311c53d0f60b8f0ba')
    // })
    // socket.on('newMessage',(data:string)=>{
    //     console.log('data',data)
    // })


    // useEffect(() => {
    //
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
                            <img src={down_icon} alt='down_icon'/>
                        </div>
                    </div>
                    <div><img
                        src="https://cdn.discordapp.com/attachments/1039560433381670961/1048325769312604221/pngegg.png"
                        alt='edit'/></div>
                </div>
            </div>
            <div className="left_side_nav">
                <nav>
                    <div className="nav_primary"><p>Primary</p></div>
                    <div className="nav_general"><p>General</p></div>
                </nav>
                <div></div>
            </div>
            <div className="messages_section">
                <div>
                    <EachMessage receiverName="abayvazyan" message="asdsaasd"/>
                    <EachMessage receiverName="Arman Mirzakhani" message=""/>
                    <EachMessage receiverName="Garik Gallstone" message=""/>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;
