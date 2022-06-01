import { motion } from "framer-motion";
import { useContext } from "react";
import { ModalTasks } from "../../contexts/ModalContext";

export default function Model_task(props) {
  const {
    title,
    delegateFrom,
    delegateTo,
    delegateDate,
    deadline,
    clientBrief,
  } = props;

  const { handleShowModal } = useContext(ModalTasks);
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-30"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={handleShowModal}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-40 transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl">
            <div
              className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sm:flex sm:items-start ">
                <div className="flex h-full gap-6 my-6 text-center sm:mx-10 sm:text-left">
                  <div className="min-w-[260px] flex flex-col gap-3 basis-1/3 pr-5">
                    <h1 className="text-main-color font-bold">{title}</h1>
                    <div>
                      <p>{`Delegate from: ${delegateFrom}`}</p>
                      <p>{`Delegate to: ${delegateTo}`}</p>
                      <p>{`Delegate date: ${delegateDate}`}</p>
                      <p>{`Deadline: ${deadline}`}</p>
                    </div>
                    <form onSubmit={handleShowModal}>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="w-full resize-none border-2 border-slate-300 focus:border-teal-500 rounded outline-none p-2 text-sm h-32"
                      ></textarea>
                      <div className="container flex gap-2">
                        <button className="w-32 border-2 border-slate-300 hover:border-teal-500 bg-white hover:bg-teal-500 px-2 py-1 text-teal-900 hover:text-teal-50 rounded transition-all">
                          Add note
                        </button>
                        <button className="w-full border-2 border-slate-300 hover:border-teal-500 bg-white hover:bg-teal-500 px-2 py-1 text-teal-900 hover:text-teal-50 rounded transition-all">
                          Done Task
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-main-color font-bold">
                      Brief from client
                    </h1>
                    <div className="flex gap-4">
                      <span>Brief version: {clientBrief.version}</span>
                      <span>{clientBrief.lastUpdate}</span>
                    </div>
                    <p className="h-full">{clientBrief.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
