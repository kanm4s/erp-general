import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../service/localStorage";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get("/users");
          setUser(resMe.data.user);
        }
      } catch (err) {
        removeAccessToken();
        navigate("login");
      }
    };
    fetchMe();
  }, []);

  const login = async (userName, password) => {
    try {
      const res = await axios.post("/auths/login", {
        userName,
        password,
      });
      setAccessToken(res.data.token);
      const resMe = await axios.get("/user");
      setUser(resMe.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
