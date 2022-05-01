import { useState } from "react";
import "./Login.css";

export default function Login() {
    const [signUpPage, setSignUpPage] = useState(false);

    const handleSignUpPage = () => {
        setSignUpPage(!signUpPage);
    };
    return (
        <div className="Login-master-container">
            <div className="login-container">
                <form
                    className={`form-signup-container ${
                        signUpPage ? "form-signup-container-show" : ""
                    }`}
                >
                    <div
                        className={`signin-element ${
                            signUpPage ? "signin-element-hidden" : ""
                        }`}
                    >
                        <h1 className="text-main-color header">
                            Sign in to ERP
                        </h1>
                        <input
                            className="input-login"
                            type="text"
                            placeholder="ID"
                        />
                        <input
                            className="input-login"
                            type="password"
                            placeholder="Password"
                        />
                        <button className="d-btn primary-bd">
                            <h1 className="text-white">Log in</h1>
                        </button>
                        <p className="forget-password">Forget password</p>
                    </div>
                </form>
                {/* signup-element-hidden */}
                <div className="signup-container">
                    <div className={`signup-element ${signUpPage ? "" : ""}`}>
                        <h1 className="text-white header">
                            Welcome To Kantar ERP
                        </h1>
                        <p className="signup-description text-white">
                            The best erp ever existed in the world
                        </p>
                        <button
                            className="d-btn white-bd"
                            onClick={handleSignUpPage}
                        >
                            <h1 className="text-white">Sign up</h1>
                        </button>
                    </div>
                </div>

                <form
                    className={`form-container ${
                        signUpPage ? "form-container-hidden" : ""
                    } `}
                >
                    <div
                        className={`signin-element ${
                            signUpPage ? "signin-element-hidden" : ""
                        }`}
                    >
                        <h1 className="text-main-color header">
                            Sign in to ERP
                        </h1>
                        <input
                            className="input-login"
                            type="text"
                            placeholder="ID"
                        />
                        <input
                            className="input-login"
                            type="password"
                            placeholder="Password"
                        />
                        <button className="d-btn primary-bd">
                            <h1 className="text-white">Log in</h1>
                        </button>
                        <p className="forget-password">Forget password</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
