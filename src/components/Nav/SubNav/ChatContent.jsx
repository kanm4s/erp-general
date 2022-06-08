export default function ChatContent(props) {
  const { sender, content } = props;
  return (
    <p
      className={`${
        sender === "self" ? "text-right" : "text-left"
      } mt-1 text-sm font-normal`}
    >
      {content}
    </p>
  );
}
