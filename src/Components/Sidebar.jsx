import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';

import "./css/sidebar.css";
import ToggleBtn from "./ToggleBtn";
import Links from "./Links";

function Sidebar() {
  const [open, setOpen] = useState(false);

  let variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <BrowserRouter>
      <motion.div className="sidebar-main" animate={open ? "open" : "closed"}>
        <motion.div className="sidebar-bg" variants={variants}>




          <Links />
          <Routes>
            <Route path="/home" element={<Home />} />



          </Routes>





        </motion.div>
        <ToggleBtn setOpen={setOpen} />

      </motion.div>
    </BrowserRouter>
  );
}

export default Sidebar;
