import React, { useEffect, useState } from "react";
import "./css/skills.css";
import { animate, motion } from "framer-motion";





import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiChakraui,
  SiSwiper,
  SiNetlify,
  SiVercel,
  SiNodedotjs,
  SiNodemon,
  SiPostman,
  SiExpress,
  SiMongodb
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiMysql } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { FaNpm, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";





function Skills() {
  // const variants = {
  //   initial: {
  //     x: -500,
  //     y: 0,
  //     opacity: 0,
  //   },
  //   animate: {
  //     x: 0,
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 2,
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  const now = 60;
  return (
    // <motion.div
    //   className="skills-main"
    //   variants={variants}
    //   initial="initial"
    //   whileInView="animate"
    // >
    //   <div className="title-box">
    //     <motion.h1 variants={variants}>Skills</motion.h1>
    //   </div>

    //   <div className="skill-box">
    //     <div className="progressing">
    //       <div className="technical-bars">
    //         <h2 className="heading">Technical Skills</h2>

    //         <div className="bar">
    //           <i className="bx bxl-html5"></i>
    //           <div className="info">
    //             <span>HTML 5</span>
    //           </div>
    //           <div className="line html">
    //             <span> hello</span>
    //           </div>
    //         </div>

    //         <div className="bar">
    //           <i className="bx bxl-css3"></i>
    //           <div className="info">
    //             <span>CSS 3</span>
    //           </div>
    //           <div className="line css">
    //             <span> </span>
    //           </div>
    //         </div>
    //         <div className="bar">
    //           <i className="bx bxl-javascript"></i>
    //           <div className="info">
    //             <span>JavaScript</span>
    //           </div>
    //           <div className="line javascript">
    //             <span></span>
    //           </div>
    //         </div>
    //         <div className="bar">
    //           <i className="bx bxl-react"></i>
    //           <div className="info">
    //             <span>React JS</span>
    //           </div>
    //           <div className="line react">
    //             <span></span>
    //           </div>
    //         </div>
    //         <div className="bar">
    //           <i className="bx bxl-java"></i>
    //           <div className="info">
    //             <span>Java</span>
    //           </div>
    //           <div className="line java">
    //             <span></span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
    <>

      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">TECH STACKS</h2>
        <div className="techsection">

          <div className="techsection">
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaJava />
            <h5>Java</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>

          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>


          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>



          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>

          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>

          <div>
            <RiTailwindCssFill />
            <h5>TailWind Css</h5>
          </div>


          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <SiVercel />
            <h5>Vercel</h5>
          </div>


          <div>
            <FaNpm />
            <h5>NPM</h5>
          </div>
          <div>
            <SiNodedotjs />
            <h5>Node Js</h5>
          </div>
          <div>
            <SiNodemon />
            <h5>Nodemon</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiMongodb />
            <h5>MongoDB</h5>
          </div>




        </div>
      </div>

    </>


  );
}

export default Skills;
