import React, { useState, useEffect } from "react";
import Header from "./component_folder/header_folder/Header";
import List from "./component_folder/list_folder/List";
import Footer from "./component_folder/footer_folder/Footer";
import Socials from "./component_folder/socials_folder/Socials";
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
