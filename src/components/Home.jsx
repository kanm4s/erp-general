import ProjectProgress from "./Main/ProjectProgress/ProjectProgress";
import TaskReminder from "./Main/TaskReminder/TaskReminder";
import MainNav from "./Nav/MainNav";
import MainSidePostIt from "./SidePostIt/MainSidePostIt";
import "./Home.css";
import SubNav from "./Nav/SubNav/SubNav";
import { NavContextProvider } from "./contexts/NavContext";

export default function Home() {
    return (
        <NavContextProvider>
            <div className="flex overflow-hidden">
                <MainNav />

                <main className="flex h-screen flex-col grow gap-1 bg-neutral-50">
                    <SubNav />

                    <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 h-32 mt-10">
                        Work hard, Play Harder!
                    </h1>

                    <div className="flex flex-row w-full h-full px-16 2xl:px-20 gap-14 mb-5">
                        <TaskReminder />
                        <ProjectProgress />
                    </div>
                </main>

                <MainSidePostIt />
            </div>
        </NavContextProvider>
    );
}
