import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Tools = [
  "QR Maker",
  "UUID Generator",
  "JWT Decoder",
  "Lorem Ipsum",
  "JSON Formatter",
  "Hash Generator",
  "Color Converter",
  "Markdown Previewer",
  "Background Remover",
  "AI Summarizer",
];

const Home = () => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      // Create infinite scroll animation and store reference
      animationRef.current = gsap.to(marquee, {
        x: "-100%",
        duration: 50,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };
  return (
    <div className="bg-light-lavender min-h-screen flex-col">
      {/* First section */}
      <section className="relative text-center flex flex-col items-center justify-center w-full min-h-screen overflow-hidden">
        <span className="flex flex-col md:flex-row items-center tracking-widest justify-center z-20">
          <span>
            <h1 className="text-4xl md:text-6xl font-bold text-center text-dark-lavender">
              One.
            </h1>
          </span>
          <span>
            <h1 className="text-4xl md:text-6xl text-center shadow-xs shadow-dark-lavender/20 text-dark-lavender bg-accent/30 rounded-2xl px-5 py-2 inline-flex items-center justify-center">
              <strong>Bench</strong>
            </h1>
          </span>
          <span>
            <h1 className="text-4xl md:text-6xl font-bold text-center text-dark-lavender">
              , Endless Tools
            </h1>
          </span>
        </span>

        <img
          src="/loginbg.png"
          alt="Hero background"
          className="absolute top-0 left-0 w-full h-full object-cover blur-xs pointer-events-none"
          // style={{ filter: "blur(5px)" }}
        />
      </section>

      {/* Second section */}
      <section className="relative flex items-center justify-center w-full md:px-20 md:mt-30">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 bg-dark-lavender z-10 shadow-2xl" />

        <div className="bg-white rounded-xl shadow-2xl p-5 flex items-center justify-center relative">
          <img
            src="/home2ndSec.png"
            alt=""
            className="w-[90%] h-auto rounded-lg shadow-xl z-20"
          />
        </div>
      </section>

      {/* Third section */}
      <section className="text-center md:mt-50">
        <h1 className="text-2xl md:text-3xl font-semibold text-dark-lavender mb-8">
          Featuring a wide range of essential developer tools.
        </h1>

        <div
          className="overflow-hidden whitespace-nowrap w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={marqueeRef}
            className="flex space-x-12 text-xl md:text-2xl font-medium text-dark-lavender/50"
            style={{ width: "200%" }}
          >
            {/* Duplicate the tools array to create seamless loop */}
            {[...Tools, ...Tools].map((tool, index) => (
              <span key={index} className="flex-shrink-0 font-simple-nunito text-md font-semibold">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>



      {/* Fourth section */}
      <section>
        <div>
            
        </div>
      </section>
    </div>
  );
};

export default Home;
