import React, { useState } from "react";
import "./signin.scss";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEmail({ [name]: value });
    setPassword({ [name]: value });
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
