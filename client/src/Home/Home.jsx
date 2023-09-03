import React from "react";
import Landing from "./Landing";
import Ingredients from "./Ingredients";
import Flavours from "./Flavours";
import Subscribe from "./Subscribe";
import { Welcome } from "./Welcome";
import { ProductSlider } from "./ProductSlider";

const Home = () => {
  return (
    <React.Fragment>
      <Landing />
      <Welcome />
      <Ingredients />
      <Flavours />
      <Subscribe />
      <ProductSlider/>
    </React.Fragment>
  );
};

export default Home;
