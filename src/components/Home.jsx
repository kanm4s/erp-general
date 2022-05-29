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

export default function Home() {
  const { page } = useContext(PageSelect);

  return (
    <NavContextProvider>
      <ProjectContextProvider>
        <MainNav />

        {page === "MAIN" && <MainPage />}
        {page === "Projects" && <ProjectPage />}
        {page === "Tasks" && <TasksPage />}
        {page === "Employees" && <EmployeesPage />}

        <MainSidePostIt />
      </ProjectContextProvider>
    </NavContextProvider>
  );
}
