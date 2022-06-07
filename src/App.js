import "./App.css";
import { AnimatePresence } from "framer-motion";
import { MainPageContext } from "./contexts/PageContext";
import Router from "./route/Router";
import { NavContextProvider } from "./contexts/NavContext";
import { EmployeeContextProvider } from "./contexts/EmployeeContext";
import { EmailContextProvider } from "./contexts/EmailContext";
import { io } from "socket.io-client";
import { useEffect, useRef } from "react";

function App() {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8003");

    socket.current.on("connection", () => {
      console.log("connected to server");
    });
  }, []);

  return (
    <AnimatePresence>
      <MainPageContext>
        <NavContextProvider>
          <EmployeeContextProvider>
            <EmailContextProvider>
              <Router />
            </EmailContextProvider>
          </EmployeeContextProvider>
        </NavContextProvider>
      </MainPageContext>
    </AnimatePresence>
  );
}

export default App;
