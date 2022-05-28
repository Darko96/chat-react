import { useSelector } from "react-redux";
import Person from "./Person";

const Sidebar = () => {
  const conversation = useSelector((state) => state.conversation); // uzmi iz celog redux statea samo .conbversations
  return (
    <div className="sidebar">
      {conversation.map((item) => {
        return <Person key={item.name} item={item} />;
      })}
    </div>
  );
};

export default Sidebar;
