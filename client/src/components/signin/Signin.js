import React, { useState } from "react";
import { connect } from "react-redux";
import "./signin.scss";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userAction";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart({ email, password });
  };

  const handleChange = async (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          id="email"
          handleChange={handleChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          id="password"
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
