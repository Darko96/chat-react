import { useSelector } from "react-redux";
import { sortMessagesByTimestamp } from "../utils/time-utils";
import Message from "./Message";

const Conversation = () => {
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );

  const sortedMessages = sortMessagesByTimestamp(selectedConversation.messages);

  let jsx = null;
  if (selectedConversation) {
    jsx = sortedMessages.map((item, index) => {
      return <Message key={index} message={item} />;
    });
  } else {
    jsx = "Please select chat to start conversation";
  }

  return <div>{jsx}</div>;
};

export default Conversation;
