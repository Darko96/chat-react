import conversation from "../json/conversation.json";

const initialState = {
  nesto: "blabla",
  drugo: 2222,
  conversation: conversation,
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
