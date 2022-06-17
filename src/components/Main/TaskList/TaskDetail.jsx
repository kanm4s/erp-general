import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { delegateTaskApi, getSpecialNoteByIdApi } from "../../../api/project";
import { getAllUser } from "../../../api/user";
import { useProject } from "../../../contexts/ProjectContext";

export default function TaskDetail(props) {
  const {
    id,
    user,
    title,
    delegateFrom,
    delegateTo,
    delegateDate,
    deadLine,
    brief,
    setShowDetail,
    workingStatus,
  } = props;

  const { updateWorkingStatus } = useProject();

  const [users, setUsers] = useState([]);
  const [delegateTarget, setDelegateTarget] = useState("1");
  const [status, setStatus] = useState("waiting");
  const [specialNote, setSpecialNote] = useState("");

  useEffect(() => {
    const fetchAllUser = async () => {
      const res = await getAllUser();
      const resSpecialNote = await getSpecialNoteByIdApi(id);
      setUsers(res.data.Users);
      setSpecialNote(resSpecialNote.data.specialNote.noteDetail);
      setStatus(workingStatus);
    };
    fetchAllUser();
    // eslint-disable-next-line
  }, []);

  const handleDelegateTask = async (e) => {
    try {
      e.preventDefault();
      if (user.position === "Manager") {
        await delegateTaskApi(delegateTarget, id);
      }
      await updateWorkingStatus(id, status, specialNote);
      setShowDetail("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {users && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container flex px-3 py-8 h-[378px] gap-4"
        >
          <div className="min-w-[260px] flex flex-col gap-3 basis-1/3 pr-5">
            <h1 className="text-main-color font-bold">{title}</h1>
            <div className="dark:text-gray-100">
              {user.position === "junior" && (
                <p>{`Delegate from: ${delegateFrom}`}</p>
              )}
              <p>{`Delegate to: ${delegateTo ? delegateTo : "None"}`}</p>
              <p>{`Delegate date: ${delegateDate ? delegateDate : "None"}`}</p>
              <p>{`Deadline: ${deadLine}`}</p>
            </div>
            {user.position === "junior" ? (
              <form onSubmit={handleDelegateTask}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  className="w-full resize-none border-2 border-slate-300 focus:border-teal-500 rounded outline-none p-2 text-sm h-32"
                  onChange={(e) => setSpecialNote(e.target.value)}
                  value={specialNote}
                ></textarea>
                <div className="container grid grid-cols-2 gap-2">
                  <select
                    name="user"
                    className="border-2 border-slate-300 px-2 py-1 rounded cursor-pointer"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="waiting">WAITING</option>
                    <option value="active">ACTIVE</option>
                    <option value="holding">HOLDING</option>
                    <option value="done">DONE</option>
                  </select>
                  <button className="border-2 border-slate-300 hover:border-teal-500 bg-white hover:bg-teal-500 px-2 py-1 text-teal-900 hover:text-teal-50 rounded transition-all">
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleDelegateTask}>
                <div className="container grid grid-cols-2 gap-2">
                  <select
                    name="user"
                    className="border-2 border-slate-300 px-2 py-1 rounded cursor-pointer"
                    onChange={(e) => setDelegateTarget(e.target.value)}
                  >
                    {users.map((ele) => (
                      <option key={ele.id} value={ele.id}>
                        {ele.firstName}
                      </option>
                    ))}
                  </select>
                  <select
                    name="user"
                    className="border-2 border-slate-300 px-2 py-1 rounded cursor-pointer"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="waiting">WAITING</option>
                    <option value="active">ACTIVE</option>
                    <option value="holding">HOLDING</option>
                    <option value="done">DONE</option>
                  </select>
                  <button className="col-span-2 border-2 border-slate-300 hover:border-teal-500 bg-white hover:bg-teal-500 px-2 py-1 text-teal-900 hover:text-teal-50 rounded transition-all">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-main-color font-bold">Brief from client</h1>
            <div className="flex grid grid-cols-2">
              {/* <span>Brief version: {brief?.version}</span> */}
              <span className="col-span-2 dark:text-gray-100">{brief}</span>
            </div>
            <p className="">{brief?.content}</p>
            {user.position === "Manager" && (
              <>
                <p className="text-main-color font-bold">{`Note from: ${delegateTo}`}</p>
                <p className="dark:text-gray-100">{specialNote}</p>
              </>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
