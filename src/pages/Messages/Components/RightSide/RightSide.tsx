import React, {FC,} from 'react';
import './RightSide.css'
import send_message from "images/send_message/icons8-email-send-80.png"
import {useTranslation} from "react-i18next";

const RightSide:FC<{popUpShow:()=>void}> = ({popUpShow})=>{

    const {t} = useTranslation()

    return (
        <>

            <div className="right_side">
                <div className="right_side_context">
                    <div>
                        <img src={send_message} alt="send_message_icon"/>
                        <div className="your_message"><h2>{t('Your Messages')}</h2></div>
                        <div className="send_private">
                            <div>{t('Send private photos and messages to a friend or group.')}</div>
                        </div>
                        <div className="send_message">
                            <div>
                                <button onClick={popUpShow}>{t('Send Message')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightSide;

