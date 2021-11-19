import React from "react";
import Hero from "./hero/Hero";
import MultipleRows from "./reclam/Reklama";
import Card from "./card/Card";
import Company from "./company/Company";
// import UnevenSetsFinite from "./card/Card";
const Home = () => {
  return (
    <div className="container">
      <Hero />
      <MultipleRows />
      <Card />
      <Company />
      {/* <UnevenSetsFinite /> */}
    </div>
  );
};

export default Home;
