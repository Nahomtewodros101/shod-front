import React from "react";
import Login from "./Login";
import Register from "./Register"; 

const Account = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Account</h1>
      <div className="flex space-x-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <Login />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Account;
