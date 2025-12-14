import React, { useEffect, useState } from 'react';
import { getProducts, addProduct } from '../api/api';
import Header from '../components/Header';
import AddProductModal from '../components/AddProductModal';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadProducts = async (q = '') => {
    try {
      setLoading(true);
      const res = await getProducts(q);
      console.log('Loaded products:', res.data);
      setProducts(res.data);
    } catch (err) {
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (q) => loadProducts(q);

  const handleAdd = async (product) => {
    try {
      const res = await addProduct(product);
      console.log('Product added:', res.data);
      await loadProducts();
      setOpenModal(false);
    } catch (err) {
      console.error("Error adding product:", err);
      alert('Failed to add product');
    }
  };

  useEffect(() => { 
    loadProducts(); 
  }, []);

  const openProduct = (id) => {
    window.location.href = `/product/${id}`;
  };

  return (
    <>
      <Header 
        onSearchClick={handleSearch} 
        onOpenAddModal={() => setOpenModal(true)} 
      />

      <main className="container mx-auto px-6 py-8">
        {loading && (
          <div className="text-center text-gray-500 text-lg">Loading...</div>
        )}
        {!loading && products.length === 0 ? (
          <div className="text-center text-gray-500 text-lg mt-20">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p._id} p={p} onClick={openProduct} />
            ))}
          </div>
        )}
      </main>

      <AddProductModal 
        open={openModal} 
        onClose={() => setOpenModal(false)} 
        onSave={handleAdd}
      />
    </>
  );
}
