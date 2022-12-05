import React, {FC} from 'react';
import "./EachMessage.css";
import avatarka from "images/avartka/Avatarka 4.png"


type Props = {
    receiverName: string;
    message: string;
}


const EachMessage: FC<Props> = ({receiverName, message}) => {
    return (
        <div>
            <div className="message_receiver">
                <div className="user_icon">
                    <img src={avatarka} alt='user_icon'/>
                </div>
                <div className="receiver_name">
                    <div>
                        <div>
                            <h4>{receiverName}</h4>
                        </div>
                    </div>
                    <div>
                        <div><h5>{message}</h5><h5>15h</h5></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EachMessage;