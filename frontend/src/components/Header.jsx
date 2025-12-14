import React, { useState } from 'react';

export default function Header({ onSearchClick, onOpenAddModal }) {
  const [q, setQ] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearchClick(q);
  };

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        {/* Logo */}
        <div className="flex items-center gap-3 text-2xl font-bold text-gray-800">
          <span className="text-indigo-600">🛍️</span>
          <span>MyStore</span>
        </div>

        {/* Search */}
        <form onSubmit={submit} className="flex items-center w-full md:w-auto gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products..."
            className="flex-1 md:flex-none border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:ring-2 focus:ring-indigo-400 outline-none transition-shadow duration-200"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition-transform transform hover:scale-105">
            Search
          </button>
        </form>

        {/* Add Product */}
        <button
          onClick={onOpenAddModal}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition-transform transform hover:scale-105"
        >
          + Add Product
        </button>
      </div>
    </header>
  );
}
