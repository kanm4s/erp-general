import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/Home";
import { AuthContext } from "../contexts/AuthContext";
import MainPage from "../components/Main/MainPage";
import ProjectPage from "../components/Main/ProjectPage";
import EmployeesPage from "../components/Main/EmployeesPage";
import TasksPage from "../components/Main/TasksPage";
import ProjectCreate from "../components/Main/CreatePage/ProjectCreate";
import TaskCreate from "../components/Main/CreatePage/TaskCreate";

export default function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Home />}>
            <Route path="Home" element={<MainPage />} />
            <Route path="Projects" element={<ProjectPage />} />
            <Route path="Projects/create" element={<ProjectCreate />} />
            <Route path="Projects/:projectId" element={<TasksPage />} />
            <Route
              path="Projects/:projectId/createTask"
              element={<TaskCreate />}
            />
            <Route
              path="Projects/:projectId/createTask/:taskId"
              element={<TaskCreate />}
            />
            <Route path="Tasks" element={<TasksPage />} />
            <Route path="Employees" element={<EmployeesPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/Home" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}
