import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../service/localStorage";
import { getUser, loginApi, signUpApi } from "../api/Auth";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await getUser();
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
      const res = await loginApi(userName, password);
      setAccessToken(res.data.token);
      const resMe = await getUser();
      setUser(resMe.data.user);
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
