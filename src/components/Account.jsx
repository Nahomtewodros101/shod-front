import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";
import pic from "../utils/Sign.png";

const Account = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 overflow-x-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">
        Account
      </h1>

      <img
        className="w-[10rem] sm:w-[15rem] md:w-[20rem] h-auto mb-6"
        src={pic}
        alt="sign in"
      />

      <div className="mb-6 sm:mb-8">
        <Link
          to="/products"
          className="bg-[#d8d7d7] hover:bg-white text-black font-bold py-2 px-3 sm:px-4 rounded transition duration-300"
        >
          Shop
        </Link>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-xl justify-center space-y-6 md:space-y-0 md:space-x-8 items-center">
        <div className="w-full md:w-auto">
          <Login />
        </div>

        <div className="w-full md:w-auto">
          <Register />
        </div>
      </div>
    </section>
  );
};

export default Account;
