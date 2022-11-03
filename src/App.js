import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Footer from "./Components/Footer/Footer";
import Socials from "./Components/Socials/Socials";
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
      <Header twitter={twitter} slack={slack} />
      <List slack={slack} />
      <Socials />
      <Footer />
    </div>
  );
};

export default App;
