import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import shoppin from "../utils/shopping.png";

const Hero = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleEnter = () => {
      gsap.to(imgRef.current, { opacity: 1, duration: 1 });
      gsap.to(textRef.current, { opacity: 1, duration: 1 });
    };

    const handleLeave = () => {
      gsap.to(imgRef.current, { opacity: 0, duration: 1 });
      gsap.to(textRef.current, { opacity: 0, duration: 1 });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleEnter();
          } else {
            handleLeave();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);
    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="h-[100vh] px-4 md:space-x-[20rem] md:mr-[10rem] rounded-sm font-Londrina bg-center scroll-smooth flex flex-col md:flex-row items-center justify-center"
      id="hero"
    >
      <img
        ref={imgRef}
        className="w-[20rem] md:w-[50rem] opacity-0"
        src={shoppin}
        alt="shoppin"
      />
      <section
        ref={textRef}
        className="text-3xl md:text-5xl font-extrabold rounded-2xl font-Londrina mt-8 md:m-3 bg-gradient-to-r from-zinc-500 to-zinc-300 p-6 md:p-[5rem] flex flex-col items-center justify-center opacity-0 shadow-2xl shadow-zinc-700 space-y-4 md:space-y-8"
      >
        About Chama™
        <p className="text-lg md:text-xl text-center">
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
