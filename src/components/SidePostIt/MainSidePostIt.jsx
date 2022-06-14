import SidePostIt from "./SidePostIt";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiChevronsRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import {
  createPostItApi,
  getAllPostItApi,
  editPostItApi,
  deletePostItApi,
} from "../../api/communicate";
import { v4 as uuidv4 } from "uuid";

export default function MainSidePostIt() {
  const [postIt, setPostIt] = useState([]);

  const fetchPostIt = async () => {
    try {
      const res = await getAllPostItApi();
      setPostIt(res.data.allPostIt);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPostIt();
  }, []);

  const addPostIt = async () => {
    try {
      const res = await createPostItApi();
      setPostIt([...postIt, res.data.postIt]);
    } catch (err) {
      console.log(err);
    }
  };

  const editPostIt = async (id, content) => {
    try {
      await editPostItApi(id, content);
      fetchPostIt();
    } catch (err) {
      console.log(err);
    }
  };

  const deletePostIt = async (id) => {
    try {
      const clone = [...postIt];
      const index = clone.findIndex((ele) => ele.id === id);
      clone.splice(index, 1);
      setPostIt([...clone]);
      await deletePostItApi(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <aside className="hidden absolute right-0 w-56 h-screen py-8 2xl:py-16 px-10 xl:flex flex-col items-end gap-5 2xl:gap-5 bg-neutral-50 dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 animate-bounce dark:text-gray-100">
          <span>Add note</span>
          <FiChevronsRight />
        </div>
        <button
          className="h-8 2xl:text-xl text-zinc-500 dark:text-gray-100"
          onClick={addPostIt}
        >
          <IoIosAddCircleOutline />
        </button>
      </div>

      {postIt ? (
        postIt.map((ele) => (
          <SidePostIt
            key={uuidv4()}
            id={ele.id}
            content={ele.content}
            editPostIt={editPostIt}
            deletePostIt={deletePostIt}
          />
        ))
      ) : (
        <></>
      )}
    </aside>
  );
}
