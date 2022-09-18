import { createContext, useContext, useReducer } from "react";
import { messageReducer } from "../reducer/message-reducer";

const MessageContext = createContext(null);

const MessageProvider = ({ children }) => {
  const [messageState, messageDispatch] = useReducer(messageReducer, { message: [] });
  return (
    <MessageContext.Provider value={{ messageState, messageDispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

const useMessage = () => useContext(MessageContext);

export { MessageProvider, useMessage };