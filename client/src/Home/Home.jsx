import React from "react";
import Landing from "./Landing";
import Ingredients from "./Ingredients";
import Flavours from "./Flavours";

const Home = () => {
  return (
    <React.Fragment>
      <Landing/>
      <Ingredients/>
      <Flavours/>
    </React.Fragment>
  );
};

export default Home;
