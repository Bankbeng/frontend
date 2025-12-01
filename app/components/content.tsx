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
      <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <div className="animate-spin rounded-full h-24 w-24 border-8 border-green-200"></div>
              <div className="animate-spin rounded-full h-24 w-24 border-t-8 border-green-500 border-solid absolute top-0 left-0"></div>
            </div>
            <p className="text-center text-2xl text-green-700 font-bold mt-8 animate-pulse">
              Loading delicious products...
            </p>
            <p className="text-green-600 mt-2">Preparing something fresh for you</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-white overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white border-4 border-red-200 rounded-3xl p-12 text-center shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="text-8xl mb-6 animate-bounce">⚠️</div>
            <h2 className="text-3xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
            <p className="text-xl text-gray-700 font-semibold mb-3">{error}</p>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We're having trouble connecting to our product database. Please make sure your API is running on http://localhost:3000
            </p>
            <button 
              onClick={fetchData}
              className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <span className="relative z-10">🔄 Try Again</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-96 right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-green-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full">
              <span className="text-3xl">🌿</span>
              <span className="text-green-700 font-semibold uppercase text-sm tracking-wider">Fresh Selection</span>
              <span className="text-3xl">🍊</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Premium</span> Collection
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Handpicked fresh fruits and refreshing drinks delivered straight to your door
          </p>
          
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-green-400 rounded-full"></div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-green-100 hover:border-green-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              
              {/* Product Image */}
              <div className="relative w-full h-64 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-8xl mb-3 animate-bounce">🍎</div>
                      <p className="text-sm text-gray-500 font-semibold">No Image Available</p>
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                  {getCategoryName(product.cat_id)}
                </div>

                {/* Favorite Icon */}
                <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group">
                  <span className="text-xl group-hover:scale-125 inline-block transition-transform">🤍</span>
                </button>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">(4.8)</span>
                </div>

                {/* Price and Stock */}
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                      ${typeof product.price === 'number' 
                        ? product.price.toFixed(2) 
                        : parseFloat(product.price).toFixed(2)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      ✓ In Stock
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Add to Cart</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">🛒</span>
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="bg-green-100 hover:bg-green-200 text-green-600 font-bold p-3.5 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg">
                    <span className="text-xl">👁️</span>
                  </button>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-24">
            <div className="bg-white rounded-3xl shadow-2xl p-16 max-w-2xl mx-auto border-4 border-dashed border-green-200">
              <div className="text-9xl mb-8 animate-bounce">🛒</div>
              <h3 className="text-4xl font-bold text-gray-700 mb-4">No Products Yet</h3>
              <p className="text-xl text-gray-500 mb-8">
                Our shelves are empty! Add some delicious products to fill up your store.
              </p>
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
                + Add Your First Product
              </button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
            <div className="text-6xl mb-4">🚚</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Free Delivery</h4>
            <p className="text-gray-600">On orders over $50</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
            <div className="text-6xl mb-4">🌱</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">100% Fresh</h4>
            <p className="text-gray-600">Organic & natural products</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
            <div className="text-6xl mb-4">⭐</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Top Quality</h4>
            <p className="text-gray-600">Premium selection guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
}