import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [signUpPage, setSignUpPage] = useState(false);
  const [idLogin, setIdLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const handleSignUpPage = () => {
    setSignUpPage(!signUpPage);
  };

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(idLogin, passwordLogin);
  };
  return (
    <div className="Login-master-container">
      <div className="login-container">
        <div className={`all-form ${!signUpPage ? "all-form-move-left" : ""}`}>
          <form className={`form-signup-container`}>
            <div
              className={`form-signup-element ${
                !signUpPage ? "form-signup-element-hidden" : ""
              }`}
            >
              <h1 className="text-main-color header">Sign in to ERP</h1>
              <input
                className="input-signup input-error"
                type="text"
                placeholder="First name"
              />
              {/* <small className="error-message">User is required</small> */}
              <input
                className="input-signup input-error"
                type="text"
                placeholder="Last name"
              />
              <input
                className="input-signup input-error"
                type="text"
                placeholder="ID"
              />

              <input
                className="input-signup"
                type="password"
                placeholder="Password"
              />
              <input
                className="input-signup"
                type="text"
                placeholder="Phone number"
              />
              <button className="d-btn primary-bd">
                <h1 className="text-white text-2xl">Sign Up</h1>
              </button>
            </div>
          </form>

          <div className={`signup-container`}>
            <div className={`signup-element`}>
              <h1 className="text-white header">Welcome To Kantar ERP</h1>
              <p className="signup-description text-white">
                The best erp ever existed in the world
              </p>
              <button className="d-btn white-bd" onClick={handleSignUpPage}>
                <h1 className="text-white text-2xl">Sign up</h1>
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
