const messageReducer = (state, action) => {
  switch (action.type) {
    case "GET_MESSAGE_ITEMS":
      return { ...state, message: action.payload };
    case "ADD_TO_MESSAGE":
      return { ...state, message: [action.payload, ...state.message] };
    case "EMPTY_MESSAGE":
      return { ...state, message: [] };
    default:
      return state;
  }
};

export { messageReducer };
