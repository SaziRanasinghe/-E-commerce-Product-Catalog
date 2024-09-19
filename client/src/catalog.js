import React, { useState } from 'react';
import cloth from './adidas.avif';
import nike from './nike.avif';
import other from './other.avif';

const productsData = [
  { id: 1, name: 'Quality Shoe', brand: 'Nike', price: 100, image: nike, origin: 'Australia'},
  { id: 2, name: 'Quality Shoe', brand: 'Adidas', price: 200, image: cloth, origin: 'Australia' },
  { id: 3, name: 'Quality Shoe', brand: 'Adidas', price: 150, image: cloth, origin: 'Australia' },
  { id: 4, name: 'Quality Shoe', brand: 'Airness', price: 10, image: other, origin: 'Australia' },
  { id: 5, name: 'Quality Shoe', brand: 'Nike', price: 100, image: nike, origin: 'Australia' },
  { id: 6, name: 'Quality Shoe', brand: 'Airness', price: 300, image: other, origin: 'Australia' },
  { id: 7, name: 'Quality Shoe', brand: 'Nike', price: 100, image: nike, origin: 'Australia' },
  { id: 8, name: 'Quality Shoe', brand: 'Airness', price: 80, image: other, origin: 'Australia' },
];

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(product => product.brand === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800">
      <h1 className="font-bold text-pink-600 text-4xl text-center md:text-4xl">Shoes Catalog</h1>

      {/* Filter */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
        <span className="text-sm font-semibold">1-{sortedProducts.length} of {productsData.length} Products</span>
        <div className="relative mt-4 sm:mt-0">
          <button
            className="relative text-sm focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <label htmlFor="filter" className="text-sm font-semibold">Filter by Brand:</label>
            <div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
              <span className="font-medium">
                {selectedCategory || 'Category'}
              </span>
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
          {dropdownOpen && (
            <div className="absolute z-10 flex-col items-start w-full pb-1 bg-white shadow-lg rounded">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200" onClick={() => handleCategoryChange('All')}>All</button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200" onClick={() => handleCategoryChange('Adidas')}>Adidas</button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200" onClick={() => handleCategoryChange('Nike')}>Nike</button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200" onClick={() => handleCategoryChange('Airness')}>Airness</button>
            </div>
          )}
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="mt-4 sm:mt-0 ">
        <label htmlFor="sort" className="text-sm font-semibold">Sort by Price:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange} className="ml-2 p-1 border border-gray-300 rounded hover:bg-gray-300">
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
        {sortedProducts.map((product) => (
          <div key={product.id}>
            <div className="block h-64 rounded-lg shadow-lg bg-white">
              <img src={product.image} alt={product.name} className="w-[170px] ml-16 mt-8 absolute" />
            </div>
            <div className="flex items-center justify-between mt-3">
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <h3 className="flex items-center">
                  <span className="text-xs font-medium text-gray-600">imported shoe from </span>
                  <span className="text-xs font-medium ml-1 text-indigo-500">{product.origin}</span>
                </h3>
                <h3 className="font-medium text-gray-900">${product.price}</h3>
              </div>
              <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">{product.brand}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-1">
        <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400" disabled>
          Prev
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded bg-indigo-200 text-sm font-medium text-indigo-600" disabled>
          1
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          2
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          3
        </button>
        <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          Next
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0L12 7.586l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 9 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Catalog;
