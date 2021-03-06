import { useContext, useState } from "react";
import validator from "validator";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";
import Input from "./ui/Input";

export default function Signup({ animate, setSignUpPage }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const { signUp } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();

    let errorTmp = {};
    if (validator.isEmpty(firstName + "")) {
      errorTmp.firstName = "First name is required";
    }
    if (validator.isEmpty(lastName + "")) {
      errorTmp.lastName = "Last name is required";
    }
    if (validator.isEmpty(userName + "")) {
      errorTmp.userName = "Username is required";
    }
    if (validator.isEmpty(password + "")) {
      errorTmp.password = "Password is required";
    }

    if (password !== confirmPassword) {
      errorTmp.password = "Password and confirm password is not match";
    }
    if (validator.isEmpty(phoneNumber + "")) {
      errorTmp.phoneNumber = "Phone number is required";
    }
    if (validator.isEmpty(email + "")) {
      errorTmp.email = "Emails required";
    }

    if (Object.keys(errorTmp).length > 0) {
      setError(errorTmp);
      return;
    } else {
      setError({});
      setFirstName("");
      setLastName("");
      setUserName("");
      setPassword("");
      setConfirmPassword("");
      setPhoneNumber("");
      setSignUpPage();
      setEmail("");
    }

    await signUp(
      firstName,
      lastName,
      userName,
      password,
      confirmPassword,
      phoneNumber,
      email
    );
  };

  return (
    <form className={`form-signup-container`} onSubmit={handleSignUp}>
      <div
        className={`form-signup-element ${
          animate ? "form-signup-element-hidden" : ""
        }`}
      >
        <h1 className="text-main-color header">Sign in to ERP</h1>
        <Input
          name="First name"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          error={error?.firstName}
        />
        <Input
          name="Last name"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          error={error?.lastName}
        />
        <Input
          name="Username"
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          error={error?.userName}
        />
        <Input
          name="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          error={error?.password}
        />
        <Input
          name="Confirm-Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          error={error?.password}
        />
        <Input
          name="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          error={error?.phoneNumber}
        />
        <Input
          name="Email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={error?.email}
        />
        <button className="d-btn primary-bd">
          <h1 className="text-white text-2xl">Sign Up</h1>
        </button>
      </div>
    </form>
  );
}
