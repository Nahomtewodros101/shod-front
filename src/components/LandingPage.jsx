import React from "react";
import bg from "../utils/bg.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section
      id="landingpage"
      className="h-[100vh] bg-cover font-Londrina bg-center opacity-90 flex items-center scroll-smooth justify-end"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="bg-transparent p-8 md:p-[5rem] flex flex-col mb-[24rem] opacity-85 my-5 h-[87rem] w-[78rem] rounded-3xl items-center justify-center shadow-2xl shadow-zinc-300 space-y-8">
        <h1 className="text-black font-bold text-2xl md:text-8xl ml-[15rem] text-center">
          Welcome To Chama
        </h1>

        

        <button className="bg-transparent hover:bg-gradient-to-r from-zinc-400 to-zinc-200 rounded-2xl ml-[15rem] p-3 px-6 text-black font-semibold text-lg md:text-xl">
          <Link to="/products">Shop Now</Link>
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
