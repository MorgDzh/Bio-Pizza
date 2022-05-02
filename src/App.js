import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Footer from "./components/Footer";

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
