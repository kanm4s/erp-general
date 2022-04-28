import "./Login.css";

export default function Login() {
    return (
        <div className="Login-master-container">
            <div className="login-container">
                <div className="signup-container">
                    <div className="signup-element">
                        <h1 className="text-white header">
                            Welcome To Kantar ERP
                        </h1>
                        <p className="signup-description text-white">
                            The best erp ever existed in the world
                        </p>
                        <button className="d-btn white-bd">
                            <h1 className="text-white">Sign up</h1>
                        </button>
                    </div>
                </div>

                <form className="form-container">
                    <div className="signin-element">
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
                    </div>
                </form>
            </div>
        </div>
    );
}
