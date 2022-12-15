import MainLayout from "layouts/MainLayout";
import {useParams} from "react-router-dom";
import "./Message.css";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
import EachUserMessage from "./Components/RightSide/Components/EachUserMessage";
import {FC} from "react";
import {useAppSelector} from "app";

const Messages: FC = () => {
    const params = useParams();
    const messages = useAppSelector(s => s.messages);
    const index = messages.findIndex((t)=>t.id === params?.chatId);
    const memberId = messages[index]?.userId;



  return (
    <MainLayout>
      <section className="message_wrapper">
        <div className="message_container">
          <LeftSide />
          {params?.chatId ? (
            <EachUserMessage
              chatId={params?.chatId}
              memberId={memberId}
            />
          ) : (
            <RightSide />
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Messages;
