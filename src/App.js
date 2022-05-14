import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
    return (
        <AnimatePresence>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
