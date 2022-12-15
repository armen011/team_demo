import React, {FC} from 'react';
import avatarka from "images/avartka/Avatarka 4.png";

const  LoadingComponent:FC =  ()=> {
    return (
        <div>
            <div className="message_receiver" >
                <div className="user_icon">
                    <img src={avatarka} alt="user_icon"/>
                </div>
            </div>
        </div>
    );
}

export default LoadingComponent;
