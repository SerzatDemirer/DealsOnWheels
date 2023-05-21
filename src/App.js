import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Cars from "./Cars";
import Navigation from "./Navigation";
import AboutUs from "./AboutUs";
import Outlet from "./outlet";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/cars" element={<Cars />} />,
        <Route path="/aboutus" element={<AboutUs />} />,
        <Route path="/outlet" element={<Outlet />} />,
      </Routes>
    </div>
  );
}

export default App;
