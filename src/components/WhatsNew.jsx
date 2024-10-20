import React, { useEffect, useState } from "react";
import axios from "axios";
import '../index.css';
import { Link } from "react-router-dom";
const WhatsNew = () => {
  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewItems = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        setNewItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load new items.");
        setLoading(false);
      }
    };

    fetchNewItems();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 opacity-100 animate-fadeIn">
      <h1 className="text-4xl font-bold mb-6">What's New</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {newItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={item.imageUrl || "https://via.placeholder.com/150"} // Fallback image
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mb-6 sm:mb-8">
        <Link
          to="/products"
          className="bg-[#d8d7d7] hover:bg-white text-black font-bold py-2 px-3 sm:px-4 rounded transition duration-300"
        >
          Shop
        </Link>
      </div>
    </section>
  );
};

export default WhatsNew;
