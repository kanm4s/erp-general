import { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";
import Signup from "./Signup";

export default function Login() {
  const [signUpPage, setSignUpPage] = useState(false);
  const [idLogin, setIdLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const handleSignUpPage = () => {
    setSignUpPage(!signUpPage);
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(idLogin, passwordLogin);
  };
  return (
    <div className="Login-master-container">
      <div className="login-container">
        <div className={`all-form ${!signUpPage ? "all-form-move-left" : ""}`}>
          <Signup
            animate={!signUpPage}
            setSignUpPage={() => setSignUpPage(!signUpPage)}
          />

          <div className={`signup-container`}>
            <div className={`signup-element`}>
              <h1 className="text-white header">Welcome To Kantar ERP</h1>
              <p className="signup-description text-white">
                The best erp ever existed in the world
              </p>
              <button className="d-btn white-bd" onClick={handleSignUpPage}>
                <h1 className="text-white text-2xl">
                  {signUpPage ? "Log in" : "Sign up"}
                </h1>
              </button>
            </div>
          </div>

          <form className={`form-container`}>
            <div
              className={`signin-element ${
                signUpPage ? "signin-element-hidden" : ""
              }`}
            >
              <h1 className="text-main-color header">Sign in to ERP</h1>
              <input
                className="input-login"
                type="text"
                placeholder="ID"
                onChange={(e) => setIdLogin(e.target.value)}
                value={idLogin}
              />
              <input
                className="input-login"
                type="password"
                placeholder="Password"
                onChange={(e) => setPasswordLogin(e.target.value)}
                value={passwordLogin}
              />
              <button className="d-btn primary-bd" onClick={handleLogin}>
                <h1 className="text-white text-2xl">Log in</h1>
              </button>
              <p className="forget-password">Forget password</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
