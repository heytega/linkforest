import React from "react";
import Header from "../../component_folder/header_folder/Header";
import List from "../../component_folder/list_folder/List";
import Socials from "../../component_folder/socials_folder/Socials";

const Home = ({ twitter, slack }) => {
  return (
    <>
      <Header twitter={twitter} slack={slack} />
      <List slack={slack} />
      <Socials />
    </>
  );
};

export default Home;
