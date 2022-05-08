import ProjectProgress from "./Main/ProjectProgress/ProjectProgress";
import TaskReminder from "./Main/TaskReminder/TaskReminder";
import MainNav from "./Nav/MainNav";
import MainSidePostIt from "./SidePostIt/MainSidePostIt";

export default function Home() {
    return (
        <div className="flex">
            <MainNav />
            <main className="flex h-screen flex-col grow gap-1 bg-neutral-50 pt-5 2xl:pt-14">
                <h1 className="text-4xl 2xl:text-6xl text-teal-500 font-bold cursor-default px-14 2xl:px-20 pt-9 h-32">
                    Work hard, Play Harder!
                </h1>
                <div className="flex flex-row w-full h-full px-16 2xl:px-20 gap-14 mb-5">
                    <TaskReminder />
                    <ProjectProgress />
                </div>
            </main>
            <MainSidePostIt />
        </div>
    );
}
