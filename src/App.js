import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { MainPageContext } from "./contexts/PageContext";
function App() {
  // const [auth,setAuth] = useState(false)
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AnimatePresence>
      <MainPageContext>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" />}> */}
          {isAuthenticated ? (
            <>
              <Route path="/*" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
          {/* </Route> */}
        </Routes>
      </MainPageContext>
    </AnimatePresence>
  );
}

export default App;
