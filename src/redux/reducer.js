import conversation from "../json/conversation.json";
import { createNewMessageInConversation } from "../utils/conversation-utils";

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

    case "SEND_MESSAGE":
      return {
        ...state,
        conversation: createNewMessageInConversation(
          state.conversation,
          action.payload.text,
          action.payload.to
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
