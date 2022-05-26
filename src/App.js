import "./App.css";
import { AnimatePresence } from "framer-motion";
import { MainPageContext } from "./contexts/PageContext";
import Router from "./route/Router";
import { NavContextProvider } from "./contexts/NavContext";
import MainSidePostIt from "./components/SidePostIt/MainSidePostIt";
function App() {
  // const [auth,setAuth] = useState(false)

  return (
    <AnimatePresence>
      <MainPageContext>
        <NavContextProvider>
          <div className="flex overflow-hidden">
            <Router />
            <MainSidePostIt />
          </div>
        </NavContextProvider>
      </MainPageContext>
    </AnimatePresence>
  );
}

export default App;
