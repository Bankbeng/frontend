'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { getProducts, getCategories } from '@/lib/api';

export default function Content() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      const [productsResponse, categoriesResponse] = await Promise.all([
        getProducts(),
        getCategories()
      ]);
      
      setProducts(productsResponse.data);
      setCategories(categoriesResponse.data);
      setError(null);
      
      console.log('Products loaded:', productsResponse.data);
      console.log('Categories loaded:', categoriesResponse.data);
    } catch (err) {
      setError('Could not load products from API');
      console.error('Error loading data:', err);
      
      setProducts([
        {
          id: 1,
          name: "Sample Product 1",
          price: 29.99,
          cat_id: 1,
          image: "/apple.jpg"
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (catId) => {
    const category = categories.find(cat => cat.cat_id === catId);
    return category ? category.cat_name : 'Unknown';
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-xl">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-xl text-red-500">{error}</p>
        <p className="text-center text-sm text-gray-500 mt-2">
          Make sure your API is running on http://localhost:3000
        </p>
        <button 
          onClick={fetchData}
          className="mx-auto block mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📦</div>
                    <p className="text-sm text-gray-500">No Image</p>
                  </div>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {getCategoryName(product.cat_id)}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-600">
                  ${typeof product.price === 'number' 
                    ? product.price.toFixed(2) 
                    : parseFloat(product.price).toFixed(2)}
                </span>
              </div>

              {/* Buy Button */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No products found in database</p>
          <p className="text-sm text-gray-400 mt-2">Add some products to see them here!</p>
        </div>
      )}
    </div>
  );
}