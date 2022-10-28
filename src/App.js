import React from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <List />
      <Footer />
    </div>
  );
};

export default App;
