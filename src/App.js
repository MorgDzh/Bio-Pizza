import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminContext from "./contexts/AdminContext";
import Navigation from "./Navigation";

const App = () => {
  return (
    <AdminContext>
      <Navigation />
    </AdminContext>
  );
};

export default App;
