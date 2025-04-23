import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Employees from "../pages/employees/Employees";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
