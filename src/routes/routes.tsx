import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import DefaultLayout from "../layout/DefaultLayout";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
