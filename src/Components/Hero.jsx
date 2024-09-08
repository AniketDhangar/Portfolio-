import React from "react";
import "./css/hero.css";
import Heroimage from "../assets/hero1.png" ;
import scrollpng from "../assets/scroll.png";
import { animate, stagger, motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 20,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ANIKET DHANGAR</motion.h2>
          <motion.h1 variants={textVariants}>MERN Stack Aspirant</motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="project-btn" variants={textVariants}>See Project</motion.button>
            <motion.button className="contact-btn" variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            src={scrollpng}
            id="scrollButton"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Future Full Stack Developer
      </motion.div>
      <div className="imageContainer">
        <img src={Heroimage} alt="" />
      </div>
    </div>
  );
}

export default Hero;
