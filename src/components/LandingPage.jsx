import React from "react";
import bg from "../utils/bg.jpg";

const LandingPage = () => {
  return (
    <section
      className="h-[100vh] bg-cover rounded-sm font-Londrina bg-center opacity-90 flex items-center scroll-smooth justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="bg-gradient-to-r from-zinc-500 to-zinc-300 p-8 md:p-[5rem] flex flex-col items-center justify-center opacity-90 shadow-2xl shadow-zinc-700 space-y-8">
        <h1 className="text-black font-bold text-4xl md:text-8xl text-center">
          Welcome To Chama
        </h1>
        \
        <button className="bg-gradient-to-r from-zinc-700 to-zinc-500 rounded-2xl p-3 px-6 text-black font-semibold text-lg md:text-xl">
          <a href="#hero">Shop Now</a>
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
