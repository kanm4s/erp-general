export default function ProjectProgressElement(props) {
  const { title, deadLine, progress } = props;
  return (
    <div className="flex items-end mb-3">
      <span className="flex basis-1/4 text-zinc-600 font-bold">{title}</span>
      <div className="flex basis-1/2 relative bottom-1 pr-8">
        <div className="flex grow flex-col">
          <span className="relative top-0 text-right text-xs">{`${progress} %`}</span>
          <div className="grow border-2 border-red-500 rounded-lg h-3 overflow-hidden">
            <div
              className="grow-0 bg-red-500 h-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <span className="flex justify-end basis-1/5">{deadLine}</span>
    </div>
  );
}
