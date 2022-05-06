export default function TaskElement() {
    return (
        <div className="flex w-full h-auto border-b-2 py-5 justify-between items-center">
            <div className="flex flex-col gap-1 text-zinc-600">
                <h3 className="text-base font-bold">
                    Project: Starship Trooper
                </h3>
                <h3 className="text-base">Tasks: 3D-Model</h3>
                <h3 className="text-base">Deadline: 18-10-2022</h3>
            </div>
            <div className="flex justify-center rounded-lg items-center px-5 h-12 bg-red-500 text-slate-100">
                4 days
            </div>
        </div>
    );
}
