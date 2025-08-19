import React, { useRef } from "react";
import Particles from "./components/Particles";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import { motion, useScroll, useTransform } from "framer-motion";

const App = () => {
  const aboutRef = useRef(null);

  // Track scroll progress for About section
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"], // When About enters/leaves viewport
  });

  // Scale About from 1 to 0.8 as you scroll through it
  const aboutScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  // Fade About out as you scroll through it (optional)
  const aboutOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  // Slide Skills up as About scales out
  const skillsY = useTransform(scrollYProgress, [0.7, 1], ["100vh", "0vh"]);
  const skillsOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <div style={{ position: "relative", minHeight: "300vh" }}>
      {/* Particles background */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          pointerEvents: "auto",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        {/* About section with zoom-out effect */}
        <motion.div
          ref={aboutRef}
          style={{
            scale: aboutScale,
            opacity: aboutOpacity,
            zIndex: 2,
            position: "relative",
          }}
        >
          <About />
        </motion.div>
        {/* Skills section slides up as About zooms out */}
        <motion.div
          style={{
            y: skillsY,
            opacity: skillsOpacity,
            zIndex: 1,
            position: "relative",
          }}
        >
          <Skills />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
