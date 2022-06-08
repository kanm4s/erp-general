import "./App.css";
import { AnimatePresence } from "framer-motion";
import { MainPageContext } from "./contexts/PageContext";
import Router from "./route/Router";
import { NavContextProvider } from "./contexts/NavContext";
import { EmployeeContextProvider } from "./contexts/EmployeeContext";
import { EmailContextProvider } from "./contexts/EmailContext";
import ChatContextProvider from "./contexts/ChatContext";

function App() {
  return (
    <AnimatePresence>
      <MainPageContext>
        <ChatContextProvider>
          <NavContextProvider>
            <EmployeeContextProvider>
              <EmailContextProvider>
                <Router />
              </EmailContextProvider>
            </EmployeeContextProvider>
          </NavContextProvider>
        </ChatContextProvider>
      </MainPageContext>
    </AnimatePresence>
  );
}

export default App;
