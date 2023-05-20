import React from "react";
import "../../Styling/home.scss";
import "../../Styling/landingPageMobile/homeMobile.scss";
import logo from "../../img/touchbasewhite.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="homeBlock"
    >
      <img className="logo" src={logo} alt="logo" />
      <h1>
        Your trusty <span className="jobWord">AI powered</span> token,
        <br />
        <span className="secondLine">coming soon!</span>
      </h1>
      <div className="homeLinks">
        <div className="homeLink">
          <i className="fas fa-clipboard-list"></i>
          <NavLink id="reg" exact to="/register">
            Buy on UniSwap
          </NavLink>
        </div>
        <div className="homeLink">
          <i className="fas fa-arrow-circle-down"></i>
          <a id="log" href="/login">
            Docs
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
