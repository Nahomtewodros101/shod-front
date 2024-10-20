import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:5001/api/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      onLogin(true);
    } catch (error) {
      setMessage("Invalid email or password");
      console.error("Login error", error);
    }
  };

  return (
    <form
    id="Login"
      onSubmit={handleSubmit}
      className="max-w-md mx-[20rem] h-[45vh] w-[60vw]  mt-8 p-20 justify-center items-center bg-[#d8d7d7] shadow-2xl rounded-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      {message && <p className="text-red-500">{message}</p>}
      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
           placeholder="Your Email..."
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
           placeholder="Your Password..."
        />
      </div>
      <button
        type="submit"
        className="bg-zinc-500 text-white py-2 px-4 rounded hover:bg-black"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
