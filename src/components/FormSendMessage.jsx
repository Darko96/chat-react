import { useState } from "react";
import { useDispatch } from "react-redux";

const FormSendMessage = (props) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = props.to;
    dispatch({
      type: "SEND_MESSAGE",
      payload: {
        to: to,
        text: text,
      },
    });
    // after submit, clear message filed
    setText("");
  };

  return (
    <div className="form-send-message">
      <form className="form-box" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
        />
        <button className="btn-send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormSendMessage;
