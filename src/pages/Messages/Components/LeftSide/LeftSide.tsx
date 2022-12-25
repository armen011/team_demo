import "./leftSide.css";
import down_icon from "images/down_icon/down-chevron-svgrepo-com.svg";
import EachMessage from "./Components/EachMessage";
import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "app";
import {getChats} from "features/messages";
import LoadingComponent from "./Components/LoadingComponent";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

export type ChatType = {
    id: string;
    picture: string;
    title: string;
    userId?: string
};

const LeftSide: FC<{popUpShow:()=>void}> = ({popUpShow}) => {
    const user = useAppSelector((state) => state.user);
    const [isLoading, setLoading] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const chats = useAppSelector(s => s.messages);

    useEffect(() => {
        dispatch(getChats({userId: user._id, isLoading, setLoading}));
    }, [user._id]);
    const navigate = useNavigate();
    const {t} = useTranslation()

    return (
        <div className="left_side">
            <div className="left_side_header">
                <div>
                    <div></div>
                    <div>
                        <div>
                            <div className="user_name_field">{user.username}</div>
                        </div>
                        <div>
                            <img src={down_icon} alt="down_icon" />
                        </div>
                    </div>
                    <div>
                        <img
                            alt="edit"
                            onClick={popUpShow}
                            className="down_icon"
                            src="https://cdn.discordapp.com/attachments/1039560433381670961/1048325769312604221/pngegg.png"
                        />
                    </div>
                </div>
            </div>
            <div className="left_side_nav">
                <nav>
                    <div className="nav_primary">
                        <p>{t('Primary')}</p>
                    </div>
                    <div className="nav_general">
                        <p>{t('General')}</p>
                    </div>
                </nav>
                <div></div>
            </div>
            <div className="messages_section">
                <div>
                    { !isLoading ? chats.map(({title, picture, id, userId}, index) => {
                        if (id === userId){
                            navigate(`messages/${id}`)
                        }
                        return <EachMessage
                                receiverName={title}
                                userId={userId}
                                img={picture}
                                key={index}
                                id={id}
                            />
                    }) : [1,2,3].map((a,index)=><LoadingComponent key={index}/>)}
                </div>
            </div>
        </div>
    );
}

export default LeftSide;
