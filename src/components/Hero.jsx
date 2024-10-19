import React from "react";
import shoppin from "../utils/shopping.png";
const Hero = () => {
  return (
    <div
      className="h-[100vh] space-x-[20rem] mr-[10rem] rounded-sm font-Londrina bg-center scroll-smooth opacity-90 flex items-center justify-center"
      id="hero"
    >
      <img className="w-[50rem] opacity-85" src={shoppin} alt="shoppin" />
      <section className="text-5xl font-extrabold font-Londrina m-3 bg-gradient-to-r from-zinc-500 to-zinc-300 p-8 md:p-[5rem] flex flex-col items-center justify-center opacity-90 shadow-2xl shadow-zinc-700 space-y-8">
       About Chama™
        <p className="text-xl">
          Chama is your ultimate online destination for stylish and comfortable
          footwear. Offering a curated selection of the latest trends and
          timeless classics, Chama caters to shoe lovers of all tastes and
          preferences. With a commitment to quality and customer satisfaction,
          shoppers can explore a diverse range of shoes, from casual sneakers to
          elegant heels, all designed to elevate your wardrobe. Experience
          seamless shopping and exceptional service at Chama, where every step
          you take is in style!
        </p>
      </section>
    </div>
  );
};

export default Hero;
