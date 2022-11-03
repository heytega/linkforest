import React, { useState, useEffect } from "react";
import Header from "./component_folder/header_folder/Header";
import List from "./component_folder/list_folder/List";
import Socials from "./component_folder/socials_folder/Socials";

const Home = () => {
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
    <>
      <Header twitter={twitter} slack={slack} />
      <List slack={slack} />
      <Socials />
    </>
  );
};

export default Home;
