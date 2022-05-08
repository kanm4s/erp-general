import ProjectProgress from "./Main/ProjectProgress/ProjectProgress";
import TaskReminder from "./Main/TaskReminder/TaskReminder";
import MainNav from "./Nav/MainNav";
import MainSidePostIt from "./SidePostIt/MainSidePostIt";
import "./Home.css";
import Message from "./Nav/SubNav/Message";
import { createContext, useState } from "react";

export default function Home() {
    const [showMessage, setShowMessage] = useState(true);

    const handleShowMessage = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div className="flex">
            <MainNav />

            <main className="flex h-screen flex-col grow gap-1 bg-neutral-50">
                <Message showMessage={showMessage} />

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
    );
}
