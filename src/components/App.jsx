import "./App.css";
import Conversation from "./Conversation";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="App">
      ovo je app
      <div className="layout">
        <Sidebar />
        <Conversation />
      </div>
    </div>
  );
};

export default App;
