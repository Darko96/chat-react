import { useSelector } from "react-redux";

const Conversation = () => {
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );

  let message = "Please select chat to start conversation";
  if (selectedConversation) {
    message = null;
  }

  return <div>{message}</div>;
};

export default Conversation;
