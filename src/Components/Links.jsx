import { color, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Links() {
  const variants = {
    open: {
      Transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      Transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemsVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
 

  return (
    <motion.div className="links" variants={variants}>
     <motion.a>

<Link to={'/home'}>Home</Link>

     </motion.a>


     <motion.a>

About Us

     </motion.a
     
     >
     <motion.a>

Skills

     </motion.a>


     <motion.a>

Project

     </motion.a>

     <motion.a>

Contact us

     </motion.a>
     


    </motion.div>
  );
}

export default Links;
