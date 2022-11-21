import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

function MessageHistory({ list }) {
  if (!list || list.length === 0) return null;
  return (
    <ul>
      {list.map((mes) =>
        mes.type === "response" ? (
          <Response key={mes.id} from={mes.from} message={mes} />
        ) : mes.type === "typing" ? (
          <Typing key={mes.id} from={mes.from} message={mes} />
        ) : (
          <Message key={mes.id} from={mes.from} message={mes} />
        )
      )}
    </ul>
  );
}

MessageHistory.defaultProps = {
  list: [],
};

export default MessageHistory;
