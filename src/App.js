import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import WhatsNew from "./components/WhatsNew";
import Account from "./components/Account";

import Register from "./components/Register";
function App() {
  return (
    <Router>
      <div className="scroll-smooth font-Arima bg-mybg">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/account" element={<Account />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
