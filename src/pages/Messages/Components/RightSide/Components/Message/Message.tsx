import React, {FC} from 'react';
import "./Message.css"
import user_icon from "images/i_icon/information.png"

const  Message:FC = ()=> {

    return (
        <div className="message">
            <div>
                <img src={user_icon} alt="user_small_icon" className="user_small_icon"/>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Message;