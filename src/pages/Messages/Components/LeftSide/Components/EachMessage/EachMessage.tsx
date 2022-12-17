import React, {FC} from "react";
import "./EachMessage.css";
import avatarka from "images/avartka/Avatarka 4.png";
import {useNavigate} from "react-router";

export type EachMessageProps = {
    receiverName: string;
    userId?:string;
    popUpHide?:()=>void
    img: string;
    id: string;
};

const EachMessage: FC<EachMessageProps> = ({
                                               receiverName,
                                               img,
                                               popUpHide,
                                               id,
                                           }) => {
    const navigate = useNavigate();

    const handleChatSelect = () => {
        navigate(`/messages/${id}`);
         popUpHide && popUpHide();
    };

    return (
        <div>
            <div className="message_receiver" onClick={handleChatSelect}>
                <div className="user_icon">
                    <img src={img.length > 0 ? img : avatarka} alt="user_icon"/>
                </div>
                <div className="receiver_name">
                    <div>
                        <div>
                            <h4>{receiverName}</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachMessage;
