import { useEffect } from "react";
import { useSelector } from "react-redux";
import { filterSingleConversation } from "../utils/conversation-utils";
import { sortMessagesByTimestamp } from "../utils/time-utils";
import FormSendMessage from "./FormSendMessage";
import Message from "./Message";

const Conversation = () => {
  const conversation = useSelector((state) => state.conversation);
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );

  const singleConversation = filterSingleConversation(
    conversation,
    selectedConversation
  );

  useEffect(() => {
    // scroll to bottom
    const element = document.getElementById("message-list");
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [singleConversation]);

  let jsx = null;
  if (singleConversation) {
    console.log(singleConversation);
    const sortedMessages = sortMessagesByTimestamp(singleConversation.messages);
    jsx = (
      <>
        <div className="message-list" id="message-list">
          {sortedMessages.map((item, index) => {
            return <Message key={index} message={item} />;
          })}
        </div>
        <FormSendMessage to={selectedConversation} />
      </>
    );
  } else {
    jsx = "Please select chat to start conversation";
  }

  return <div className="message-area">{jsx}</div>;
};

export default Conversation;
