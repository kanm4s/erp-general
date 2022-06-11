import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function SidePostIt(props) {
  const { id, content, editPostIt, deletePostIt } = props;
  const [text, setText] = useState();
  const [deleting, setDeleting] = useState(false);
  return (
    <>
      <div
        draggable="true"
        className="relative w-full h-36 bg-yellow-200 shadow-lg overflow-hidden"
        onDragLeave={() => setDeleting(true)}
        onDragEnter={() => setDeleting(false)}
        onDragEnd={() => {
          deletePostIt(id);
          setDeleting(false);
        }}
      >
        <textarea
          className="bg-transparent w-full h-full resize-none border-none focus:outline-none p-4 tracking-wide text-base cursor-pointer"
          defaultValue={content}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => editPostIt(id, text)}
        ></textarea>
        {deleting && (
          <div className="absolute top-0 w-full h-full flex justify-center items-center bg-indigo-400 opacity-30">
            <MdDeleteForever className="text-7xl" />
          </div>
        )}
      </div>
    </>
  );
}
