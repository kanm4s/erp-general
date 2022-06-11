import { useContext, useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import ChatContent from "./ChatContent";
import socket from "../../../config/socket";
import { AuthContext } from "../../../contexts/AuthContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useChat } from "../../../contexts/ChatContext";

export default function Chat(props) {
  const { id, receiver } = props;
  const { user } = useContext(AuthContext);
  const { chatContent, setChatContent, setReceiver, sendMessage } = useChat();

  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", ({ userId, chat }) => {
      setChatContent([{ senderId: userId, chat }, ...chatContent]);
    });
  }, [chatContent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(id, message);

    socket.emit("message", {
      userId: user.id,
      chat: message,
    });
    setMessage("");
  };

  return (
    <div className="flex flex-col w-full h-68 rounded bg-invert-color text-main-color dark:text-gray-100 dark:bg-gray-700 font-bold shadow-md px-5 py-3">
      <div className="h-full">
        <div className="flex items-center justify-between pb-1 border-b-2 border-slate-300 border-dashed mb-2">
          <span className="">{receiver}</span>
          <IoIosCloseCircleOutline
            className="cursor-pointer"
            onClick={() => setReceiver("")}
          />
        </div>
        <div className="flex flex-col-reverse h-40 overflow-y-auto">
          {chatContent.map((ele, idx) => {
            return (
              <ChatContent
                key={idx}
                sender={ele.senderId === user.id ? "self" : ""}
                content={ele.chat}
              />
            );
          })}
        </div>
        <form
          className="flex gap-1 items-center mt-2 border-t-2 border-slate-300 border-dashed pt-2"
          onSubmit={handleSubmit}
        >
          <input
            className="flex text-base border-2 border-slate-300 focus:outline-none focus:border-slate-500 dark:text-gray-700 rounded-xl pl-3"
            placeholder="Aa"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className="p-1 rounded hover:bg-slate-300 hover:text-slate-700">
            <BiSend className="text-xl cursor-pointer" />
          </button>
        </form>
      </div>
    </div>
  );
}
window.scrollTo(0, document.body.scrollHeight);
