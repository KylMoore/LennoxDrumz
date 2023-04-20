import "./styles/styles.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import ProductsAndServices from "./Components/ProductsAndServices";
import Drums from "./Components/Drums";
import IBCs from "./Components/IBCs";
import Regrind from "./Components/Regrind";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";
import { Route, Routes } from "react-router-dom";
import React from "react";
import DrumAcceptancePolicy from "./Components/DrumAcceptancePolicy";
import PreparingContainers from "./Components/PreparingContainers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productsAndServices" element={<ProductsAndServices />} />
        <Route path="/drums" element={<Drums />} />
        <Route path="/ibcs" element={<IBCs />} />
        <Route path="/regrind" element={<Regrind />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <PreparingContainers />
      <DrumAcceptancePolicy />
      <Footer />
    </div>
  );
}

export default App;
