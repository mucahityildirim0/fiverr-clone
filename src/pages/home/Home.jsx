import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
    </div>
  );
};

export default Home;
