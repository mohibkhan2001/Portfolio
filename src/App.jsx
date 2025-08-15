import React from "react";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";

const App = () => {
  <script>AOS.init();</script>;
  return (
    <>
      <Hero />
      <About/>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed", // stays fixed when scrolling
          zIndex: "-10000",
          top: 0,
          left: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </>
  );
};

export default App;
