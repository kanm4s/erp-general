import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ModelTask from "../../Modal/ModelTask";
import { v4 as uuidv4 } from "uuid";

export default function TaskElement(props) {
  const {
    title,
    delegateFrom,
    delegateTo,
    delegateDate,
    deadline,
    clientBrief,
    Tasks,
    handleShowModal,
    showModal,
  } = props;

  const [urgent, setUrgent] = useState(false);

  const currentDate = dayjs(deadline);
  const calDate = currentDate.diff(dayjs(), "day");

  useEffect(() => {
    if (calDate <= 2) {
      setUrgent(true);
    }
  }, [calDate]);

  return (
    <>
      {showModal && (
        <ModelTask
          key={uuidv4()}
          title={title}
          delegateFrom={delegateFrom}
          delegateTo={delegateTo}
          delegateDate={delegateDate}
          deadline={deadline}
          clientBrief={clientBrief}
        />
      )}
      <div
        className="block 2xl:flex w-full h-auto border-b-2 py-3 2xl:py-4 justify-between items-center transition-all hover:scale-105 cursor-pointer"
        onClick={handleShowModal}
      >
        <div className="flex flex-col text-zinc-600 dark:text-gray-100 pb-1 2xl:pb-0">
          <h3 className="text-sm 2xl:text-base font-bold">Project: {title}</h3>
          <h3 className="text-sm 2xl:text-base">Tasks: {Tasks}</h3>
          <h3 className="text-sm 2xl:text-base">Deadline: {deadline}</h3>
        </div>
        <div
          className={`flex justify-center rounded 2xl:rounded-lg items-center 2xl:px-4 py-1 2xl:py-2 ${
            urgent
              ? `bg-red-500 text-slate-100`
              : `bg-main-color text-slate-100`
          }`}
        >
          {`${calDate} days`}
        </div>
      </div>
    </>
  );
}
