import "./App.css";
import { AnimatePresence } from "framer-motion";
import { MainPageContext } from "./contexts/PageContext";
import Router from "./route/Router";
import { NavContextProvider } from "./contexts/NavContext";
function App() {
  // const [auth,setAuth] = useState(false)

  return (
    <AnimatePresence>
      <MainPageContext>
        <NavContextProvider>
          <Router />
        </NavContextProvider>
      </MainPageContext>
    </AnimatePresence>
  );
}

export default App;
