import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";

const App = () => {
  return (
    <ClientContext>
      <AdminContext>
        <Navigation />
      </AdminContext>
    </ClientContext>
  );
};

export default App;
