import React, { useState } from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Footer from "./components/footer/Footer";
import Socials from "./components/socials/Socials";
import "./App.css";

const App = () => {
  const [twitter, setTwitter] = useState({
    id: "twitter",
    username: "ChristianTAE",
  });

  const [slack, setSlack] = useState({
    id: "slack",
    username: "Tega Akpovbiyor",
  });

  return (
    <div className="main-container">
      <Header twitter={twitter} slack={slack} />
      <List slack={slack} />
      <Socials />
      <Footer />
    </div>
  );
};

export default App;
