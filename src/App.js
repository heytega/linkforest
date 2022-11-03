import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactPage from "./ContactPage";
import Footer from "./component_folder/footer_folder/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
