import React from 'react';

export default function ProductCard({ p, onClick }) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer flex flex-col"
      onClick={() => onClick(p._id)}
    >
      <div className="h-48 mb-4 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
        {p.image ? (
          <img src={p.image} alt={p.name} className="object-cover h-full w-full"/>
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>
      <h4 className="font-semibold text-gray-800 text-lg">{p.name}</h4>
      <p className="text-sm text-gray-500 mb-2">{p.category}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="text-indigo-600 font-bold text-lg">₹ {p.price}</div>
        <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
