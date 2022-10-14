import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
};

export default Home;