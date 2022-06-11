import SidePostIt from "./SidePostIt";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  createPostItApi,
  getAllPostItApi,
  editPostItApi,
  deletePostItApi,
} from "../../api/communicate";
import { v4 as uuidv4 } from "uuid";

export default function MainSidePostIt() {
  const { user } = useContext(AuthContext);
  const [postIt, setPostIt] = useState([]);

  const fetchPostIt = async () => {
    try {
      const res = await getAllPostItApi();
      console.log(res.data.allPostIt);
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
      console.log(index);
      clone.splice(index, 1);
      setPostIt([...clone]);
      await deletePostItApi(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <aside className="hidden absolute right-0 w-56 h-screen py-8 2xl:py-16 px-10 xl:flex flex-col items-end gap-5 2xl:gap-5 bg-neutral-50">
        <button className="h-8 2xl:text-xl text-zinc-500" onClick={addPostIt}>
          <IoIosAddCircleOutline />
        </button>

        {postIt ? (
          postIt.map((ele) => (
            <SidePostIt
              key={ele.id}
              id={ele.id}
              content={ele.content}
              editPostIt={editPostIt}
              deletePostIt={deletePostIt}
            />
          ))
        ) : (
          <></>
        )}
        {/* <SidePostIt />
        <SidePostIt />
        <SidePostIt /> */}
        {/* <SidePostIt /> */}
      </aside>
    </>
  );
}
