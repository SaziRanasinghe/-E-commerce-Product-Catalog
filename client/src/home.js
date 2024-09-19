import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-pink-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Find Your Perfect Pair</h1>
          <p className="mt-4"> Buy One, Get One 50% Off – Limited Time Only</p>
          <Link to='/catalog'>
        <button
            className="mt-6 inline-block bg-white text-pink-700 py-2 px-4 rounded"
          >
            See Product Catalog
          </button></Link>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/mobile-application-shoe-store-3d-online-shopping-footwear-different-types-models-men_870512-2555.jpg')",
        }}
      ></div>
    </div>
  );
};

export default Home;
