export default function TaskElement() {
    return (
        <div className="block 2xl:flex w-full h-auto border-b-2 py-3 2xl:py-4 justify-between items-center transition-all hover:scale-105 cursor-pointer">
            <div className="flex flex-col text-zinc-600 pb-1 2xl:pb-0">
                <h3 className="text-sm 2xl:text-base font-bold">
                    Project: Starship Trooper
                </h3>
                <h3 className="text-sm 2xl:text-base">Tasks: 3D-Model</h3>
                <h3 className="text-sm 2xl:text-base">Deadline: 18-10-2022</h3>
            </div>
            <div className="flex justify-center rounded 2xl:rounded-lg items-center 2xl:px-4 py-1 2xl:py-2 bg-red-500 text-slate-100">
                4 days
            </div>
        </div>
    );
}
