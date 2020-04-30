import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
