import MainNav from "./Nav/MainNav";
import MainSidePostIt from "./SidePostIt/MainSidePostIt";
import "./Home.css";
import { NavContextProvider } from "../contexts/NavContext";
import { ProjectContextProvider } from "../contexts/ProjectContext";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <NavContextProvider>
      <ProjectContextProvider>
        <div className="flex overflow-hidden bg-neutral-50 dark:bg-gray-800">
          <MainNav />

          <Outlet />

          <MainSidePostIt />
        </div>
      </ProjectContextProvider>
    </NavContextProvider>
  );
}
