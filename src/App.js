import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage";
import { auth } from "./firebase/firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const unsubscribeFromAuth = null;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/signin">
          <AuthenticationPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
