import React, { useState } from 'react';

export default function AddProductModal({ open, onClose, onSave }) {
  const [form, setForm] = useState({ name: '', price: '', description: '', image: '', category: '' });

  if (!open) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    onSave({ ...form, price: Number(form.price) });
    setForm({ name: '', price: '', description: '', image: '', category: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md animate-slide-up">
        <h3 className="text-xl font-semibold mb-5 text-gray-800">Add New Product</h3>

        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border px-4 py-2 mb-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" className="w-full border px-4 py-2 mb-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="w-full border px-4 py-2 mb-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full border px-4 py-2 mb-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Short description" className="w-full border px-4 py-2 mb-4 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition">Cancel</button>
          <button onClick={submit} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">Save</button>
        </div>
      </div>
    </div>
  );
}
