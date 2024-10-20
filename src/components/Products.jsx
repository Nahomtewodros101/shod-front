import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://localhost:5001/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="products"
      className="min-h-[100vh] bg-[#d8d7d7] rounded-sm font-Londrina flex flex-col items-center justify-top scroll-smooth px-4"
    >
      <nav className="bg-gradient-to-r from-zinc-500 to-zinc-300 text-black p-[2rem] shadow-2xl shadow-zinc-700 rounded-3xl m-2 top-1 fixed w-[90%] md:w-[40rem] z-50">
        <ul className="flex flex-row justify-center items-center space-x-4 md:space-x-[6rem]">
          <li>
            <a
              href="#whatsnew"
              className="text-lg md:text-xl font-medium relative group"
            >
              See Whats New
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-lg md:text-xl font-medium relative group"
            >
              Shop
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-lg md:text-xl font-medium relative group"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#account"
              className="text-lg md:text-xl font-medium relative group"
            >
              Account
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="font-Arima font-semibold mt-[12rem] px-4">
        <h1 className="text-3xl md:text-5xl font-semibold mb-8">
          hello from products 👋
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4 w-full max-w-7xl">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
