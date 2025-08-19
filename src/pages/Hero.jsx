import React from "react";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import SplitText from "../components/SplitText";
import ShinyText from "../components/ShinyText";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="Hero w-full h-screen flex flex-col justify-center items-center m-auto font-primary">
        <div className="hero-text flex flex-col justify-center items-center gap-6">
          <ShinyText
            text="Mohib Khan"
            disabled={false}
            speed={3}
            className="custom-class text-8xl font-primaryBold"
          />
          <p className="text-3xl text-secondary2">Front End Developer</p>
          <SplitText
            text="Crafting interactive experiences with precision & creativity"
            className="text-xl font-primary text-center text-white"
            delay={50}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>

        <div className="hero-btns mt-12 flex gap-8">
          <Buttons
            text={"View My Work"}
            className={"bg-secondary2 p-3 rounded-md text-white"}
          />
          <Buttons
            text={"Get In Touch"}
            className={
              "contactBtn bg-transparent p-3 rounded-md text-secondary2"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
