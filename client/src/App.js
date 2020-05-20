import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage";
import CheckoutPage from "./pages/checkout/Checkout";
import { selectCurrentUser } from "./redux/user/userSelectors";
import { checkUserSession } from "./redux/user/userAction";

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/signin">
          {currentUser ? <Redirect to="/" /> : <AuthenticationPage />}
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { checkUserSession })(App);
