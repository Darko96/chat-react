import { convertTimestamptToTime } from "../utils/time-utils";

const Message = (props) => {
  const content = props.message.content;
  const msgType = props.message.type;
  const time = convertTimestamptToTime(props.message.time);
  return (
    <div className={"message " + msgType}>
      <div>{content}</div>
      <div>{time}</div>
    </div>
  );
};

export default Message;
