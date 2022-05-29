import { useDispatch, useSelector } from "react-redux";

const Person = (props) => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );

  const item = props.item;

  let active = false;
  if (selectedConversation && item.name === selectedConversation) {
    // this conversation
    active = true;
  }

  const handleClick = (e) => {
    console.log("klik", item.name);
    // redux action je u formatu standard flux action https://github.com/redux-utilities/flux-standard-action
    dispatch({
      type: "CLICK_ON_PERSON",
      payload: item.name,
    });
  };

  return (
    <div className={active ? "person active" : "person"} onClick={handleClick}>
      <div className="avatar">
        <img
          className="person-img"
          src={item.picture_data.src}
          alt={item.picture_data.alt}
        />
      </div>
      <div className="name-box">
        <div className="person-name">{item.name}</div>
        <div className="person-status">{item.status}</div>
      </div>
    </div>
  );
};
export default Person;
