import { useSelector } from "react-redux";

const Sidebar = () => {
  const conversation = useSelector((state) => state.conversation); // uzmi iz celog redux statea samo .conbversations
  return (
    <div>
      {conversation.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </div>
  );
};

export default Sidebar;
