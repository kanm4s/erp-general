import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../service/localStorage";
import { getUser, loginApi, signUpApi } from "../api/Auth";
import socket from "../config/socket";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = getAccessToken();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (token) {
          const resMe = await getUser();
          setUser(resMe.data.user);

          socket.on("connection", () => {
            console.log("connected to server");
          });

          socket.on("users", (users) => {
            console.log(users);
          });
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
      const res = await loginApi(userName, password);
      setAccessToken(res.data.token);
      const resMe = await getUser();
      setUser(resMe.data.user);
      socket.on("connection", () => {
        console.log("connected to server");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (
    firstName,
    lastName,
    userName,
    password,
    confirmPassword,
    phoneNumber,
    email
  ) => {
    try {
      const res = await signUpApi(
        firstName,
        lastName,
        userName,
        password,
        confirmPassword,
        phoneNumber,
        email
      );
      console.log(res.data.message);
    } catch (err) {
      console.log(err.data.message);
    }
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, signUp }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
