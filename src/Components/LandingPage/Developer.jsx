import React from "react";
import "../../Styling/developer.scss";
import "../../Styling/landingPageMobile/developerMobile.scss";

import { motion } from "framer-motion";

// variants for parent animation
const parentList = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: "-10%",
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -25 },
};

function Developer() {
  return (
    <motion.div
      variants={parentList}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="developerBlock"
    >
      <div className="contentAndLinks">
        <p>
          The zkGPT team can be reached throughout out accounts and profiles on
          various social media platforms.{" "} <br></br>
          <span className="tColor">Reach out to us!</span>
          <br /> <br />
          zkGPT is a project that grows with its community
          and we hope to deliver an amazing product that 
          lives up to the current standards of DeFi enthusiasts.
        </p>
        <div className="middle">
          <motion.a
            variants={item}
            className="jobTile"
            transition={{ ease: "easeIn" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/anthonyvigz"
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            variants={item}
            className="jobTile"
            transition={{ ease: "easeIn" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anthonyvigliotta/"
          >
            <i className="fab fa-linkedin-in"></i>
          </motion.a>
          <motion.a
            variants={item}
            className="jobTile"
            transition={{ ease: "easeIn" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/anthonyvigz"
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
          <motion.a
            variants={item}
            className="jobTile"
            transition={{ ease: "easeIn" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.anthonyvigliotta.com"
          >
            <i className="fas fa-id-card"></i>
          </motion.a>
        </div>
      </div>
      <a
        className="bmc"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.buymeacoffee.com/anthonyvigz"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
          alt="Buy me a coffee"
        />
        <span className="bmcText">Buy me a coffee</span>
      </a>
    </motion.div>
  );
}

export default Developer;
