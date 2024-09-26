import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import PrivateRoute from "../shared/auth/protected-route";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/protected"
          element={<PrivateRoute element={<Login />} />}
        />
      </Routes>
    </Router>
  );
};

export default Routing;
