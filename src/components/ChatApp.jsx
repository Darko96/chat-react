import Conversation from "./Conversation";
import Sidebar from "./Sidebar";

const ChatApp = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Conversation />
    </div>
  );
};

export default ChatApp;
