import conversation from "../json/conversation.json";

const initialState = {
  nesto: "blabla",
  drugo: 2222,
  conversation: conversation,
  selectedConversation: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK_ON_PERSON":
      return {
        ...state,
        selectedConversation: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
