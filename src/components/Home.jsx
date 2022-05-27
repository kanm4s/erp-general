import MainNav from "./Nav/MainNav";
import MainPage from "./Main/MainPage";
import MainSidePostIt from "./SidePostIt/MainSidePostIt";
import "./Home.css";
import TasksPage from "./Main/TasksPage";
import EmployeesPage from "./Main/EmployeesPage";
import { NavContextProvider } from "../contexts/NavContext";
import { useContext } from "react";
import { PageSelect } from "../contexts/PageContext";

export default function Home() {
  const { page } = useContext(PageSelect);

  return (
    <NavContextProvider>
      <MainNav />

      {page === "MAIN" && <MainPage />}
      {page === "Tasks" && <TasksPage />}
      {page === "Employees" && <EmployeesPage />}

      <MainSidePostIt />
    </NavContextProvider>
  );
}
