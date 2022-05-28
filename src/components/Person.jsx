import { useDispatch, useSelector } from "react-redux";

const Person = (props) => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );

  const item = props.item;

  let active = false;
  if (selectedConversation && item.name === selectedConversation.name) {
    // this conversation
    active = true;
  }

  const handleClick = (e) => {
    console.log("klik", item.name);
    // redux action je u formatu standard flux action https://github.com/redux-utilities/flux-standard-action
    dispatch({
      type: "CLICK_ON_PERSON",
      payload: item,
    });
  };

  return (
    <div className={active ? "person active" : "person"} onClick={handleClick}>
      <div>{item.name}</div>
      <div>{item.status}</div>
      <div className="avatar">
        <img src={item.picture_data.src} alt={item.picture_data.alt} />
      </div>
    </div>
  );
};
export default Person;
