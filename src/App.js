import React from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Footer from "./components/footer/Footer";
import Socials from "./components/socials/Socials";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <List />
      <Socials />
      <Footer />
    </div>
  );
};

export default App;
