import React, { useState } from "react";
import axios from "axios";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:5001/api/users", {
        email,
        username,
        password,
        isAdmin,
      });
      setMessage(response.data.message);

      onRegister(true);
    } catch (error) {
      setMessage("Error creating user. Please try again.");
      console.error("Registration error", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-[20rem] h-[45vh] w-[60vw]  mt-8 p-10 justify-center items-center bg-[#d8d7d7] shadow-2xl rounded-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      {message && <p className="text-red-500 font-Arima">{message}</p>}
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
        <label className="block mb-2">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
          placeholder="Your Username..."
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
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
            className="mr-2"
          />
          Register as Admin
        </label>
      </div>
      <button
        type="submit"
        className="bg-zinc-500 text-white py-2 px-4 rounded  hover:bg-black"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
