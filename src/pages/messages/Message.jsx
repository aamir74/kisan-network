import { useMessage } from "../../hooks";
import List from "./components/List";

const Message = () => {
  const { messageState } = useMessage();
  const { message } = messageState;
  return (
    <div className="m-2 d-flex justify-content-center">
      <div className="d-box d-flex flex-column justify-content-center">
        {message?.length ? <List message={message} /> : null}
      </div>
    </div>
  );
};
export default Message;
