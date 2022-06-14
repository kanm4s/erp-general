import { createContext, useContext, useEffect, useState } from "react";
import { getAllMessage, joinRoomApi, sendMessageApi } from "../api/communicate";

const ChatContext = createContext();

export default function ChatContextProvider(props) {
  const [chat] = useState([]);
  const [chatContent, setChatContent] = useState([]);
  const [receiver, setReceiver] = useState({});
  const [room, setRoom] = useState("");

  const fetchChat = async (id) => {
    try {
      const res = await getAllMessage(id);
      console.log(res.data);
      setChatContent(res.data.allMessage);
    } catch (err) {
      console.log(err);
    }
  };

  const joinRoom = async (id) => {
    try {
      const res = await joinRoomApi(id);
      setRoom(res.data.room);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (Object.keys(receiver).length > 0) {
      fetchChat(receiver.id);
    }
  }, [receiver]);

  const sendMessage = async (id, content) => {
    try {
      const res = await sendMessageApi(id, content);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chat,
        chatContent,
        setChatContent,
        receiver,
        setReceiver,
        sendMessage,
        joinRoom,
        room,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
}

const useChat = () => {
  const ctx = useContext(ChatContext);
  return ctx;
};

export { ChatContextProvider, ChatContext, useChat };
