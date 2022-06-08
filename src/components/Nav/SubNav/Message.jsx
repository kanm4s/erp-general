import { useChat } from "../../../contexts/ChatContext";
import Chat from "./Chat";
import MessageElement from "./MessageElement";

export default function Message() {
  const { receiver } = useChat();
  return (
    <div className="flex flex-col justify-between px-6 py-8 h-full">
      <div className="relative">
        <h1 className="text-4xl font-bold h-16 text-invert-color cursor-default 2xl:pl-10 mb-10">
          Message
        </h1>
        <MessageElement />
        <MessageElement />
        <MessageElement />
        <MessageElement />
      </div>
      {Object.keys(receiver).length > 0 ? (
        <Chat id={receiver.id} receiver={receiver.firstName} />
      ) : (
        <></>
      )}
    </div>
  );
}
