
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import TiltedCard from "../components/TiltedCard";
import SplitText from "../components/SplitText";
import mohibImg from "../assets/Images/mohibKhan.webp";
import AboutCards from "../components/AboutCards";
import { rocketIcon, codeIcon, paintIcon, usersIcon } from "../index";
import {motion} from 'framer-motion';
import Aos from "aos";


const About = () => {
  useEffect((()=>{
    Aos.init({duration:2000});
  }), []);
  <script>AOS.init();</script>;
  const cardData = [
    {
      CardIcon: codeIcon,
      CardTitle: "Clean Code",
      CardDesc: "Writing maintainable, scalable code following best practices",
    },
    {
      CardIcon: paintIcon,
      CardTitle: "UI/UX Focus",
      CardDesc: "Creating beautiful, intuitive user interfaces",
    },
    {
      CardIcon: rocketIcon,
      CardTitle: "Performance",
      CardDesc: "Optimizing for speed and user experience",
    },
    {
      CardIcon: usersIcon,
      CardTitle: "Collaboration",
      CardDesc: "Working effectively in team environments",
    },
  ];
  return (
    <motion.div 
    className="About h-[110vh] bg-secondary"
    data-aos="fade-up"
    initial={{opacity: 0}}
    whileInView={{opacity:1,}}
    transition={{duration: 0.5, delay: 1}}
    ease = "aniticipate"
    >
      <div className="  w-screen flex items-center flex-col gap-7 p-20 ">
        <h1 className="flex items-center gap-4 font-bold text-6xl">
          <span style={{ color: "white" }}>About</span>
          <span
            style={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #6b21a8, #a269ff, #d1b3ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Me
          </span>
        </h1>

        <SplitText
          text="Passionate front end developer with 1 year of experience creating modern
        web and mobile applications"
          className="text-gray-300 font-primary text-xl text-center mb-10"
          delay={25}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.5}
          rootMargin="-100px"
          textAlign="center"
          // onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className="flex  justify-center gap-60 ">
          <div className="mt-50">
            <TiltedCard
              imageSrc={mohibImg}
              altText="Mohib Khan - Front End Developer"
              captionText="Mohib Khan - Front End Developer"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="600px"
              imageWidth="600px"
              rotateAmplitude={5}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <div className="text-gray-400 text-left w-2/5 text-xl font-primary flex flex-col gap-8 mt-5">
            <h1 className="text-white font-primaryBold text-2xl">
              Hi there! I'm Mohib Khan, a passionate front-end developer
            </h1>
            <p className="text-lg">
              I specialize in creating beautiful, responsive web applications
              using modern technologies like React, TypeScript, and Tailwind
              CSS. With a keen eye for design and a passion for clean code, I
              bridge the gap between design and development.
              <br />
              <br />
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="flex flex-wrap gap-6">
              {cardData.map((card, index) => (
                <AboutCards
                  key={index}
                  CardIcon={card.CardIcon}
                  CardTitle={card.CardTitle}
                  CardDesc={card.CardDesc}
                  
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
