const Message = (props) => {
  const content = props.message.content;
  const msgType = props.message.type;
  return <div className={"message " + msgType}>{content}</div>;
};

export default Message;
