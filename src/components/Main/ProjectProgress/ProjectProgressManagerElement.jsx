import dayjs from "dayjs";

export default function ProjectProgressManagerElement(props) {
  const { title, deadLine, progress, tasksLeft, resourceUsed } = props;

  const dl = dayjs(deadLine);
  const now = dayjs();
  const dayLeft = dl.diff(now, "day");

  return (
    <div className="grid grid-cols-7 items-end mb-3">
      <span className="text-zinc-600 dark:text-gray-100 font-bold">
        {title}
      </span>
      <div className="col-span-2 relative bottom-1 pr-8">
        <div className="flex grow flex-col">
          <span
            className={`relative top-0 text-right text-xs ${
              dayLeft <= 2
                ? "text-red-500 dark:text-red-500"
                : "dark:text-gray-100"
            }`}
          >{`${progress} %`}</span>
          <div
            className={`grow border-2 ${
              dayLeft <= 2
                ? "border-red-500"
                : "border-teal-500 dark:border-gray-100"
            } rounded-lg h-3 overflow-hidden`}
          >
            <div
              className="grow-0 bg-red-500 h-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <span
        className={`${
          dayLeft <= 2 ? "text-red-500 dark:text-red-500" : "dark:text-gray-100"
        }`}
      >
        {deadLine}
      </span>
      <span
        className={`text-center ${
          dayLeft <= 2 ? "text-red-500 dark:text-red-500" : "dark:text-gray-100"
        }`}
      >
        {resourceUsed}
      </span>
      <span
        className={`text-center ${
          dayLeft <= 2 ? "text-red-500 dark:text-red-500" : "dark:text-gray-100"
        }`}
      >
        {tasksLeft}
      </span>
      <span
        className={`text-center ${
          dayLeft <= 2 ? "text-red-500 dark:text-red-500" : "dark:text-gray-100"
        }`}
      >
        {dayLeft}
      </span>
    </div>
  );
}
