import MainNav from "./Nav/MainNav";
import MainPage from "./Main/MainPage";
import MainSidePostIt from "./SidePostIt/MainSidePostIt";
import "./Home.css";
import TasksPage from "./Main/TasksPage";
import EmployeesPage from "./Main/EmployeesPage";
import { NavContextProvider } from "../contexts/NavContext";
import { useContext } from "react";
import { PageSelect } from "../contexts/PageContext";
import ProjectPage from "./Main/ProjectPage";
import { ProjectContextProvider } from "../contexts/ProjectContext";
import { Outlet } from "react-router-dom";

export default function Home() {
  const { page } = useContext(PageSelect);

  return (
    <NavContextProvider>
      <ProjectContextProvider>
        <div className="flex overflow-hidden">
          <MainNav />

          <Outlet />

          <MainSidePostIt />
        </div>
      </ProjectContextProvider>
    </NavContextProvider>
  );
}
