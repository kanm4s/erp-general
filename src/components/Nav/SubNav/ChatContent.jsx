export default function ChatContent(props) {
    const { sender } = props;
    return (
        <p
            className={`${
                sender === "self" ? "text-right" : "text-left"
            } mt-1 text-sm font-normal`}
        >
            ChatContent
        </p>
    );
}
