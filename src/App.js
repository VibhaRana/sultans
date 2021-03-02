import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";

import Home from "./components/home/Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
