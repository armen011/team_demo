import MainLayout from "layouts/MainLayout";
import { useParams } from "react-router-dom";
import "./Message.css";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
import EachUserMessage from "./Components/RightSide/Components/EachUserMessage";

const Messages = () => {
  const params = useParams();

  return (
    <MainLayout>
      <section className="message_wrapper">
        <div className="message_container">
          <LeftSide />
          {params?.chatId ? (
            <EachUserMessage
              chatId={params?.chatId}
              memberId="638e5d9c5363dc9bd2f02de7"
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
