import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./route_folder/home_page/Home";
import ContactPage from "./route_folder/contact_page/ContactPage";
import Footer from "./component_folder/footer_folder/Footer";
import "./App.css";

const App = () => {
  const [twitter, setTwitter] = useState({});

  const [slack, setSlack] = useState({});

  useEffect(() => {
    setTwitter({
      id: "twitter",
      username: "ChristianTAE",
    });

    setSlack({
      id: "slack",
      username: "Tega Akpovbiyor",
    });
  }, []);

  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home twitter={twitter} slack={slack} />}
          />
          <Route path="/Contact" element={<ContactPage twitter={twitter} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
