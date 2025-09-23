import React from "react";

const Home = () => {
  return (
    <div
      className="bg-light-lavender min-h-screen flex-col"
      style={{
        backgroundImage: "url('/homeHerobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-center flex flex-col items-center justify-center w-full min-h-screen">
        <span className="flex flex-col md:flex-row items-center tracking-widest justify-center">
          <span>
            <h1 className="text-4xl md:text-6xl font-bold text-center text-dark-lavender">
              One.
            </h1>
          </span>
          <span>
            <h1 className="text-4xl md:text-6xl text-center text-dark-lavender bg-accent/30 rounded-2xl px-5 py-2 inline-flex items-center justify-center">
              <strong>Bench</strong>
            </h1>
          </span>
          <span>
            <h1 className="text-4xl md:text-6xl font-bold text-center text-dark-lavender">
              , Endless Tools
            </h1>
          </span>
        </span>
      </div>
      <div className="">
        dfgbhnjkml
      </div>
    </div>
  );
};

export default Home;
