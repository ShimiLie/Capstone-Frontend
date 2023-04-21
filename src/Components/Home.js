import React from "react";
import Suggestions from "./Suggestions";
import Posts from "./Posts";

const Home = () => {
  return (
    <>
      <section className="main-container">
        <div className="inner-container">
          <div className="left-section">
            <Posts />
          </div>
          <div className="right-section">
            <Suggestions />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
