import { BiSend } from "react-icons/bi";
import ChatContent from "./ChatContent";

export default function Chat() {
    return (
        <div className="flex flex-col w-full h-68 rounded bg-invert-color text-main-color font-bold shadow-md px-5 py-3">
            <div className="h-full">
                <p className="w-full pb-1 border-b-2 border-slate-300 border-dashed mb-2">
                    Kan
                </p>
                <div className="flex flex-col-reverse h-40 overflow-y-auto">
                    <ChatContent sender="self" />
                    <ChatContent sender="" />
                    <ChatContent sender="" />
                    <ChatContent sender="" />
                    <ChatContent sender="" />
                    <ChatContent sender="" />
                    <ChatContent sender="" />
                    <ChatContent sender="" />
                    <ChatContent sender="" />
                    <ChatContent sender="" />
                </div>
                <div className="flex items-center mt-2 border-t-2 border-slate-300 border-dashed pt-2">
                    <input
                        className="flex text-base border-2 border-slate-300 focus:outline-none focus:border-slate-500 rounded-xl pl-3"
                        placeholder="Aa"
                    />
                    <BiSend className="w-16 text-xl cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
window.scrollTo(0, document.body.scrollHeight);
