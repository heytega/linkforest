import React, { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Socials from "./components/Socials/Socials";
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
