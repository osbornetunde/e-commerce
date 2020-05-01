import React from "react";
import "./AuthenticationPage.scss";
import SignIn from "../../components/signin/Signin";
import SignUp from "../../components/signup/Signup";

const AuthenticationPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenticationPage;
