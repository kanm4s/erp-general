import Chat from "./Chat";
import MessageElement from "./MessageElement";

export default function Message() {
    return (
        <div className="flex flex-col justify-between px-6 py-8 h-full">
            <h1 className="text-4xl font-bold h-16 text-invert-color cursor-default 2xl:pl-10">
                Message
            </h1>
            <div className="relative bottom-16">
                <MessageElement />
                <MessageElement />
                <MessageElement />
            </div>
            <Chat />
        </div>
    );
}
