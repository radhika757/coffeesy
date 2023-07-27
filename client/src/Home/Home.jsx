import React from "react";
import Landing from "./Landing";
import Ingredients from "./Ingredients";
import Flavours from "./Flavours";
import Subscribe from "./Subscribe";
const Home = () => {
  return (
    <React.Fragment>
      <Landing/>
      <Ingredients/>
      <Flavours/>
      <Subscribe/>
    </React.Fragment>
  );
};

export default Home;
