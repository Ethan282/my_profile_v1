import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { assets } from "../assets/asstes.js";
import { motion } from "motion/react";

function Hero() {
  return (
    <div id="home" className="min-h-screen flex pt-16 h-screen text-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile  */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10">
              <span className="text-zinc-700">Frontend Developer</span>
              <br />
              <span className="text-cyan-700 font-orbitron">Angular</span>
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl 
            text-zinc-600 mb-6"
            >
              I build responsive and interactive web applications using modern
              technologies.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a href="#work" className="flex gap-2 items-center bg-zinc-700 hover:bg-slate-900 text-slate-200 px-10 py-4 rounded-full hover:text-white cursor-pointer  hover:scale-105 transition-all duration-300">
                View Projects
                <FaArrowRight className="ml-2" />
              </a>
              <a href="#contact" className="flex gap-2 items-center border border-slate-400 rounded-full px-10 py-4 hover:scale-105 hover:border-slate-900 transition duration-300 cursor-pointer">
                Contact Me
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center ">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4  border-slate-600/30 glow">
                <img
                  src={assets.profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-slate-600/20 overflow-hidden p-3">
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">5+</div>
                    <div className="text-sm text-white">years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
