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
import { LanguageProvider } from "./Components/LanguageContext";

// dropdown and services menu, add transitions and hover effects
// terms and services and policy pages are modals that need some close buttons added, currently closes outside of modal
// look for margin, padding, etc
// media Queries
//   

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/productsAndServices"
            element={<ProductsAndServices />}
          />
          <Route path="/drums" element={<Drums />} />
          <Route path="/ibcs" element={<IBCs />} />
          <Route path="/regrind" element={<Regrind />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
