import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import PrivateRoute from "../shared/auth/protected-route";
import { TenantReport } from "@module";
import { Card } from "antd";

const Routing = () => {
  return (
      <Routes>
      <Route path="/tenant-report" exact  element={<TenantReport />} />
      <Route path="/" exact  element={<Card title={"Page Title"}>Content</Card>} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/protected"
          element={<PrivateRoute element={<Login />} />}
        />
      </Routes>
  );
};

export default Routing;
