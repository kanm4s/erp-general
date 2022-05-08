export default function SidePostIt() {
    return (
        <>
            <div
                draggable="true"
                className="w-full h-36 bg-yellow-200 shadow-lg overflow-hidden"
            >
                <textarea className="bg-transparent w-full h-full resize-none border-none focus:outline-none p-4 tracking-wide text-base cursor-pointer"></textarea>
            </div>
        </>
    );
}
