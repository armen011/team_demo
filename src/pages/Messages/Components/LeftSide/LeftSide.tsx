import "./leftSide.css";
import down_icon from "images/down_icon/down-chevron-svgrepo-com.svg";
import EachMessage from "./Components/EachMessage";
import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "app";
import {getChats} from "features/messages";

export type ChatType = {
    id: string;
    picture: string;
    title: string;
    userId?:string
};

const LeftSide: FC = () => {
    const userId = useAppSelector((state) => state.user._id);

    const dispatch = useAppDispatch();
    const chats = useAppSelector(s => s.messages);


    useEffect(() => {
        dispatch(getChats({userId}));
    }, [userId]);

    console.log(chats);


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
                            <img src={down_icon} alt="down_icon"/>
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
                    {chats.map(({title, picture, id,userId}, index) => {
                        return (
                            <EachMessage
                                receiverName={title}
                                message="asdsaasd"
                                userId={userId}
                                img={picture}
                                key={index}
                                id={id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

//638e5f835d8af1d429f3501c

export default LeftSide;