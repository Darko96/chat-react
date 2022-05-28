import { useSelector } from "react-redux";
import { sortMessagesByTimestamp } from "../utils/time-utils";
import FormSendMessage from "./FormSendMessage";
import Message from "./Message";

const Conversation = () => {
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );

  let jsx = null;
  if (selectedConversation) {
    const sortedMessages = sortMessagesByTimestamp(
      selectedConversation.messages
    );
    jsx = (
      <>
        <div className="message-list">
          {sortedMessages.map((item, index) => {
            return <Message key={index} message={item} />;
          })}
        </div>
        <FormSendMessage to={selectedConversation.name} />
      </>
    );
  } else {
    jsx = "Please select chat to start conversation";
  }

  return <div className="message-area">{jsx}</div>;
};

export default Conversation;
