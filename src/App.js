import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Parks from "./Components/Parks";
import ParkDetails from "./Components/ParkDetails";
import About from "./Components/About";
import Error404 from "./Components/Error404";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="parks" element={<Parks />} />
        <Route path="parks/:parkCode" element={<ParkDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
