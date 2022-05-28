export const filterSingleConversation = (conversation, name) => {
  let single = false;
  conversation.forEach((item) => {
    if (item.name === name) {
      single = item;
    }
  });
  return single;
};

export const createNewMessageInConversation = (conversation, text, to) => {
  const timestamp = Date.now();
  let updated_conversations = [];
  conversation.forEach((item) => {
    if (item.name === to) {
      const new_message = {
        time: timestamp,
        content: text,
        type: "sent",
      };
      let updated_item = {
        ...item,
        messages: [...item.messages, new_message],
      };
      updated_conversations.push(updated_item);
    } else {
      // unchanged
      updated_conversations.push(item);
    }
  });
  return updated_conversations;
};
