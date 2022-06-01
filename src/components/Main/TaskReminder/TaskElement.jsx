import ModelTask from "../../Modal/ModelTask";

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

  return (
    <>
      {showModal && (
        <ModelTask
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
        <div className="flex flex-col text-zinc-600 pb-1 2xl:pb-0">
          <h3 className="text-sm 2xl:text-base font-bold">Project: {title}</h3>
          <h3 className="text-sm 2xl:text-base">Tasks: {Tasks}</h3>
          <h3 className="text-sm 2xl:text-base">Deadline: {deadline}</h3>
        </div>
        <div className="flex justify-center rounded 2xl:rounded-lg items-center 2xl:px-4 py-1 2xl:py-2 bg-red-500 text-slate-100">
          4 days
        </div>
      </div>
    </>
  );
}
