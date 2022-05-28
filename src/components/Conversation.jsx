import { useSelector } from "react-redux";
import Message from "./Message";

const Conversation = () => {
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );

  let jsx = null;
  if (selectedConversation) {
    jsx = selectedConversation.messages.map((item, index) => {
      return <Message key={index} message={item} />;
    });
  } else {
    jsx = "Please select chat to start conversation";
  }

  return <div>{jsx}</div>;
};

export default Conversation;
