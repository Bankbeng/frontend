// Content Component - Main Product Display
// 'use client' enables React hooks like useState and useEffect on the client side
// This component: fetches products/categories from API, displays them in a grid, filters by category

'use client';

// Imports from React and Next.js libraries
import { useState, useEffect } from 'react';
import Image from "next/image";
// Imports API functions from lib/api.js
import { getProducts, getCategories } from '@/lib/api';

export default function Content() {
  // STATE VARIABLES (using React Hooks)
  // State stores data that can change and trigger re-renders
  
  // products: array of product objects
  // setProducts: function to update products array
  const [products, setProducts] = useState([]);
  
  // categories: array of category objects
  const [categories, setCategories] = useState([]);
  
  // loading: boolean for showing loading spinner
  const [loading, setLoading] = useState(true);
  
  // error: stores error message if API call fails
  const [error, setError] = useState(null);
  
  // selectedCategory: tracks which category filter is active ('all' or specific cat_id)
  const [selectedCategory, setSelectedCategory] = useState('all');

  // EFFECT HOOK - Runs once when component mounts
  // useEffect with empty dependency array [] means "run only on first load"
  useEffect(() => {
    fetchData(); // Call function to get data from API
  }, []);

  // FETCH DATA FUNCTION - Gets products and categories from API
  const fetchData = async () => {
    try {
      // Set loading to true while fetching
      setLoading(true);
      
      // Promise.all runs both API calls in parallel (at the same time)
      // More efficient than waiting for them one by one
      const [productsResponse, categoriesResponse] = await Promise.all([
        getProducts(),      // Call API to get all products
        getCategories()     // Call API to get all categories
      ]);
      
      // Store the data in state
      // .data extracts the actual data from the API response
      setProducts(productsResponse.data);
      setCategories(categoriesResponse.data);
      setError(null);
      
      // Log data to browser console for debugging
      console.log('Products loaded:', productsResponse.data);
      console.log('Categories loaded:', categoriesResponse.data);
    } catch (err) {
      // If API call fails, catch the error
      setError('Could not load products from API');
      console.error('Error loading data:', err);
      
      // Show sample data as fallback
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
      // This runs whether success or error - turn off loading spinner
      setLoading(false);
    }
  };

  // HELPER FUNCTION - Gets the name of a category by its ID
  const getCategoryName = (catId) => {
    // Find the category object that matches this ID
    const category = categories.find(cat => cat.cat_id === catId);
    // Return category name or 'Unknown' if not found
    return category ? category.cat_name : 'Unknown';
  };

  // FILTER PRODUCTS - Creates a new array of products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products  // If 'all' selected, show all products
    : products.filter(product => product.cat_id === selectedCategory); // Otherwise filter by category

  // LOADING STATE - Show spinner while fetching data
  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20 px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Spinning loader animation */}
          {/* animate-spin: CSS animation that rotates the element */}
          {/* border-t-transparent: makes only one side of the circle visible */}
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
          <p className="text-center text-lg text-gray-700 font-semibold mt-8">
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  // ERROR STATE - Show error message if API fails
  if (error) {
    return (
      <div className="min-h-screen bg-white py-16 px-4">
        {/* Error message box */}
        <div className="max-w-md mx-auto text-center bg-red-50 border border-red-300 rounded-lg p-8">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-700 mb-4">Error Loading Products</h2>
          <p className="text-gray-700 mb-6 text-sm">{error}</p>
          <p className="text-gray-600 mb-6 text-xs">Make sure your API is running on http://localhost:3000</p>
          {/* Button to retry fetching data */}
          {/* onClick: calls fetchData() function when clicked */}
          <button 
            onClick={fetchData}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // SUCCESS STATE - Show products and filters
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            Fresh fruits and refreshing drinks
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        {/* Allows user to click and filter products by category */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {/* "All Products" button - always visible */}
          {/* selectedCategory === 'all' ? ... : ... is a ternary operator (if-else in one line) */}
          <button
            onClick={() => setSelectedCategory('all')}  {/* Update state when clicked */}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-green-600 text-white'  {/* Active button style (green) */}
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'  {/* Inactive button style (gray) */}
            }`}
          >
            All ({products.length})  {/* Shows count of total products */}
          </button>
          
          {/* CATEGORY BUTTONS - Loop through each category and create a button */}
          {/* .map() creates a new button for each category */}
          {categories.map((category) => {
            {/* Count how many products are in this category */}
            const categoryCount = products.filter(p => p.cat_id === category.cat_id).length;
            return (
              <button
                key={category.cat_id}  {/* React needs unique 'key' for lists */}
                onClick={() => setSelectedCategory(category.cat_id)}  {/* Filter by this category */}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  selectedCategory === category.cat_id
                    ? 'bg-green-600 text-white'  {/* Active style */}
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'  {/* Inactive style */}
                }`}
              >
                {category.cat_name} ({categoryCount})  {/* Category name and product count */}
              </button>
            );
          })}
        </div>
        
        {/* PRODUCTS GRID */}
        {/* grid: Tailwind's CSS Grid layout system */}
        {/* grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4: responsive columns */}
        {/*   - 1 column on phones, 2 on tablets, 3 on laptops, 4 on large screens */}
        {/* gap-6: spacing between cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* .map() loops through filteredProducts array and creates a card for each */}
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Product Image */}
              <div className="w-full h-48 bg-gray-100 overflow-hidden flex items-center justify-center relative">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-4xl">🍎</div>
                    <p className="text-xs text-gray-500 mt-2">No Image</p>
                  </div>
                )}
                {/* Category Tag */}
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {getCategoryName(product.cat_id)}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-green-600">
                    ${typeof product.price === 'number' 
                      ? product.price.toFixed(2) 
                      : parseFloat(product.price).toFixed(2)}
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">In Stock</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && products.length > 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-6">No products in this category.</p>
            <button 
              onClick={() => setSelectedCategory('all')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              View All
            </button>
          </div>
        )}

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products</h3>
            <p className="text-gray-600">No products available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}