import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getAccessToken } from "./service/localStorage";
function App() {
  // const [auth,setAuth] = useState(false)
  let navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <AnimatePresence>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
        {/* </Route> */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
