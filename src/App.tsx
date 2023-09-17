import About from "./components/About";
import MainLayout from "./layouts/MainLayout";
import React, { ReactElement, ReactNode, useLayoutEffect, useState } from "react";
import anime from "animejs";
import Loading from "./components/Loading";
import Drone from "./components/Drone";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import LinksWidget from "./components/LinksWidget";
export default function App() {

  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className='md:max-w-[1280px] lg:max-w-[1440px] relative mx-auto w-full h-[100vh] bg-bgBlack pt-2 px-2 md:pt-[50px] md:px-0'>
      <Navbar />
      <LinksWidget />
      <div className='md:max-w-[1280px] lg:max-w-[1440px] h-[400px] w-full mx-auto '>
        <div className="pt-10 md:pt-40 z-[1] relative">
          <About />
        </div>
        <motion.div className="top-0 left-0 z-[2] absolute w-full h-full">
          <motion.div
            drag
            dragConstraints={ref}
            dragElastic={0.5}
            dragMomentum={true}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}

            className="rounded-full md:scale-100 scale-100  w-fit h-fit">
            <Drone />
          </motion.div>
        </motion.div>
        {/* <Loading /> */}
      </div>
    </div>
  )
}
