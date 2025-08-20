import { useRef } from "react";
import Particles from "./components/Particles";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";

const App = () => {
  const scrollRef = useRef(null);

  // Example: scroll down one viewport height
  const scrollToAbout = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: window.innerHeight, // scroll 1 screen down
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-y-scroll overflow-x-hidden"
      style={{
        position: "relative",
        height: "100vh", // make the wrapper the scroll container
      }}
    >
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

      {/* Foreground content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        {/* <Skills /> */}
      </div>
    </div>
  );
};

export default App;
