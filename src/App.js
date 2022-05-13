import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
