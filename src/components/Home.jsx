import MainNav from "./Nav/MainNav";
import MainPage from "./Main/MainPage";
import MainSidePostIt from "./SidePostIt/MainSidePostIt";
import "./Home.css";
import { NavContextProvider } from "./contexts/NavContext";
import { Route, Routes } from "react-router-dom";
import TasksPage from "./Main/TasksPage";

export default function Home() {
    return (
        <NavContextProvider>
            <div className="flex overflow-hidden">
                <MainNav />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Tasks" element={<TasksPage />} />
                </Routes>
                <MainSidePostIt />
            </div>
        </NavContextProvider>
    );
}
