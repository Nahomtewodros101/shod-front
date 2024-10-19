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
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    observer.observe(imgRef.current);
    observer.observe(textRef.current);

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <div
      className="h-[100vh] space-x-[20rem] mr-[10rem] rounded-sm font-Londrina bg-center scroll-smooth flex items-center justify-center"
      id="hero"
    >
      <img
        ref={imgRef}
        className="w-[50rem] opacity-0" // Start with hidden opacity
        src={shoppin}
        alt="shoppin"
      />
      <section
        ref={textRef}
        className="text-5xl font-extrabold rounded-2xl font-Londrina m-3 bg-gradient-to-r from-zinc-500 to-zinc-300 p-8 md:p-[5rem] flex flex-col items-center justify-center opacity-0 shadow-2xl shadow-zinc-700 space-y-8" // Start with hidden opacity
      >
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
