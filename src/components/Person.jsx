import { useDispatch } from "react-redux";

const Person = (props) => {
  const dispatch = useDispatch();

  const item = props.item;

  const handleClick = (e) => {
    console.log("klik", item.name);
    // redux action je u formatu standard flux action https://github.com/redux-utilities/flux-standard-action
    dispatch({
      type: "CLICK_ON_PERSON",
      payload: item.name,
    });
  };

  return (
    <div className="person" onClick={handleClick}>
      <div>{item.name}</div>
      <img src={item.picture_data.src} alt={item.picture_data.alt} />
    </div>
  );
};
export default Person;
