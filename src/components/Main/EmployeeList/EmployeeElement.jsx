import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { BiMessageSquareDots } from "react-icons/bi";
import { useChat } from "../../../contexts/ChatContext";
import { NavToggle } from "../../../contexts/NavContext";

export default function EmployeeElement(props) {
  const { id, firstName, lastName, position, phoneNumber, showDetailFunction } =
    props;
  const { handleShowMessage, setShowMessage, setCheckSubMenuType } =
    useContext(NavToggle);

  const { setReceiver } = useChat();

  return (
    <motion.div
      className="border-l-4 border-white hover:border-teal-500 dark:border-gray-700 dark:hover:border-gray-100 transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div
          className="container relative right-1 grid grid-cols-4 py-[8px]"
          onClick={() => showDetailFunction(id)}
        >
          <span className="flex text-main-color">{`${firstName} ${lastName[0].toUpperCase()}.`}</span>
          <span className="flex text-zinc-400">{position}</span>
          <span className="flex text-main-color gap-2">{phoneNumber}</span>
        </div>
        <span className="flex text-zinc-400 justify-end items-center z-10 py-[8px]">
          <div
            className="p-1 hover:bg-slate-300 hover:text-slate-50 dark:hover:text-gray-700 transition-all rounded"
            onClick={() => {
              setReceiver({ id, firstName });
              handleShowMessage("Message");
            }}
          >
            <BiMessageSquareDots className="cursor-pointer" />
          </div>
          <div
            className="p-1 transition-all rounded dark:hover:text-gray-700"
            onClick={() => console.log("test")}
          >
            <div className={`rounded-full h-3 w-3 bg-green-500`}></div>
          </div>
        </span>
      </div>
    </motion.div>
  );
}
