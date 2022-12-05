import "./EachUserMessage.css"
import Message from "../Message";
import smile from "images/smile/smile.png"
import React, {FC, useState} from 'react';
import i_icon from "images/i_icon/information.png"
import user from "images/user_icon/man 1 (Traced).svg";
import picture_icon from 'images/picture_icon/image.png'


const EachUserMessage: FC = () => {
    const [inputVal, setVal] = useState<string>('');

    return (
        <section className="each_user_message">
            <div>
                <div>
                    <img className="i_icon" src={user} alt="user_image"/>
                    <h5>yardages</h5>
                </div>
                <div>
                    <img className="i_icon" src={i_icon} alt="i_icon"/>
                </div>
            </div>

            <div className="each_user_message_context">
                <div>
                    <div className="message_field">
                        <Message/>
                    </div>
                </div>


                <div>
                    <div>
                        <div>
                            <div className="input_smile_div">
                                <div >
                                    <img src={smile} alt="smile" className="smile"/>
                                </div>
                                <div className="textarea">
                                    <input placeholder="Message..."
                                           onChange={(e) => {
                                               setVal(e.target.value)
                                           }}
                                           value={inputVal}/>
                                </div>
                            </div>
                            <div>
                                <img src={picture_icon} alt="picture_icon" className='picture_icon'/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EachUserMessage;
