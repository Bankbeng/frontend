// CONTENT COMPONENT - Main Product Display (SIMPLIFIED)
// This handles: fetching data from API and filtering products by category
// Loading and error states REMOVED for simplicity!

// ==================== STEP 1: IMPORTS ====================
// 'use client' tells Next.js this code runs in the browser (not on server)
// This is needed because we use React hooks like useState and useEffect
'use client';

// Import React tools for managing state and side effects
import { useState, useEffect } from 'react';

// Import our custom API functions from lib/api.js file
// @ symbol is a shortcut for the root directory of your project
import { getProducts, getCategories } from '@/lib/api';

// ==================== STEP 2: COMPONENT DEFINITION ====================
export default function Content() {
  
  // ==================== STEP 3: STATE VARIABLES ====================
  // STATE = data that can change and cause the component to re-render (update)
  // Think of state as the "memory" of your component
  
  // PRODUCTS STATE
  // products: current value (starts as empty array [])
  // setProducts: function to update products (like a setter)
  // When you call setProducts([...new data...]), React re-renders the component
  const [products, setProducts] = useState([]);
  
  // CATEGORIES STATE
  // Stores list of categories (e.g., Fruits, Drinks)
  const [categories, setCategories] = useState([]);
  
  // SELECTED CATEGORY STATE
  // Tracks which filter button is active
  // 'all' = show all products
  // 1, 2, 3, etc. = show only products from that category ID
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== STEP 4: EFFECT HOOK ====================
  // useEffect runs code AFTER component renders
  // Used for "side effects" like fetching data, timers, subscriptions
  
  // The [] (empty dependency array) means: "run ONLY ONCE when component first loads"
  // If you put [selectedCategory] it would run every time selectedCategory changes
  useEffect(() => {
    fetchData(); // Call the fetch function we defined below
  }, []); // Empty array = run once on mount

  // ==================== STEP 5: FETCH DATA FUNCTION ====================
  // async function = function that can wait for promises (API calls)
  const fetchData = async () => {
    // STEP 5A: Fetch data from API
    // Promise.all() runs multiple async operations AT THE SAME TIME (parallel)
    // This is faster than doing them one after another (sequential)
    // It waits for BOTH to complete, then returns array of results
    const [productsResponse, categoriesResponse] = await Promise.all([
      getProducts(),      // API call #1: Get all products
      getCategories()     // API call #2: Get all categories
    ]);
    
    // STEP 5B: Store data in state
    // .data extracts the actual data from the response object
    // Calling setProducts/setCategories triggers a re-render with new data
    setProducts(productsResponse.data);
    setCategories(categoriesResponse.data);
    
    // STEP 5C: Log for debugging
    // console.log prints to browser console (F12 → Console tab)
    console.log('Products loaded:', productsResponse.data);
    console.log('Categories loaded:', categoriesResponse.data);
  };

  // ==================== STEP 6: HELPER FUNCTIONS ====================
  
  // FUNCTION: Get category name from ID
  // Example: getCategoryName(1) returns "Fruits"
  const getCategoryName = (catId) => {
    // .find() searches array for first item matching condition
    // cat => cat.cat_id === catId means "find category where cat_id equals catId"
    const category = categories.find(cat => cat.cat_id === catId);
    
    // Ternary operator: condition ? valueIfTrue : valueIfFalse
    // If category found, return its name; otherwise return 'Unknown'
    return category ? category.cat_name : 'Unknown';
  };

  // ==================== STEP 7: FILTER LOGIC ====================
  // This creates a NEW array based on selectedCategory
  // It doesn't modify the original products array
  
  const filteredProducts = selectedCategory === 'all' 
    ? products  // If 'all' selected, use full products array
    : products.filter(product => product.cat_id === selectedCategory); 
    // .filter() creates new array with only items that match condition
    // Only keep products where cat_id matches selectedCategory

  // ==================== STEP 8: MAIN UI ====================
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* ==================== CATEGORY FILTER BUTTONS ==================== */}
        {/* flex-wrap: allows buttons to wrap to next line on small screens */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          
          {/* "ALL" BUTTON */}
          {/* Template literal ${} lets you insert JavaScript into string */}
          {/* Conditional styling: if selectedCategory === 'all', use green style; else use gray */}
          <button
            onClick={() => setSelectedCategory('all')}  // Arrow function to set state
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-green-600 text-white'  // Active style
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'  // Inactive style
            }`}
          >
            All ({products.length})  {/* Show total product count */}
          </button>
          
          {/* CATEGORY BUTTONS - Generated dynamically */}
          {/* .map() loops through categories array and creates button for each */}
          {/* map(item => JSX) transforms each item into JSX element */}
          {categories.map((category) => {
            // Calculate how many products are in this category
            // .filter() counts products where cat_id matches
            const categoryCount = products.filter(p => p.cat_id === category.cat_id).length;
            
            return (
              <button
                key={category.cat_id}  // IMPORTANT: key helps React track which button is which
                onClick={() => setSelectedCategory(category.cat_id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  selectedCategory === category.cat_id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category.cat_name} ({categoryCount})
              </button>
            );
          })}
        </div>
        
        {/* ==================== PRODUCTS GRID ==================== */}
        {/* Responsive grid: 1 column mobile, 2 tablet, 3 laptop, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* LOOP THROUGH FILTERED PRODUCTS */}
          {/* Creates a card for each product */}
          {filteredProducts.map((product) => (
            <div
              key={product.id}  // Key for React's tracking
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
            >
              
              {/* PRODUCT IMAGE SECTION */}
              <div className="w-full h-48 bg-gray-100 overflow-hidden flex items-center justify-center relative">
                {/* Conditional rendering: show image if exists, else show placeholder */}
                {product.image ? (
                  <img
                    src={product.image}  // Image URL from product data
                    alt={product.name}   // Alt text for accessibility
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                ) : (
                  // Fallback if no image
                  <div className="text-center">
                    <div className="text-4xl">🍎</div>
                    <p className="text-xs text-gray-500 mt-2">No Image</p>
                  </div>
                )}
                
                {/* CATEGORY TAG - Positioned absolutely in top-right corner */}
                {/* absolute: takes element out of normal flow */}
                {/* top-2 right-2: position from top and right edges */}
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {getCategoryName(product.cat_id)}  {/* Call helper function */}
                </div>
              </div>

              {/* PRODUCT DETAILS SECTION */}
              <div className="p-4">
                {/* Product Name */}
                {/* line-clamp-2: limits text to 2 lines, adds ... if longer */}
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* PRICE AND STOCK ROW */}
                <div className="flex justify-between items-center mb-4">
                  {/* Price - Format to 2 decimal places */}
                  <span className="text-lg font-bold text-green-600">
                    ${typeof product.price === 'number' 
                      ? product.price.toFixed(2)  // If number, format directly
                      : parseFloat(product.price).toFixed(2)}  {/* If string, convert first */}
                  </span>
                  
                  {/* Stock Badge */}
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    In Stock
                  </span>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-2">
                  {/* Add to Cart Button */}
                  {/* flex-1: takes up all available space */}
                  <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATES ==================== */}
        
        {/* EMPTY STATE 1: Category has no products */}
        {/* Show if filtered list is empty BUT products exist overall */}
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

        {/* EMPTY STATE 2: No products at all */}
        {/* Show if products array is completely empty */}
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

// ==================== KEY CONCEPTS SUMMARY ====================
/*
1. STATE (useState): Component memory that triggers re-renders when changed
2. EFFECTS (useEffect): Run code after rendering (data fetching, subscriptions)
3. ASYNC/AWAIT: Handle asynchronous operations (API calls) cleanly
4. ARRAY METHODS:
   - .map(): Transform array items into JSX elements (loops)
   - .filter(): Create new array with items matching condition
   - .find(): Get first item matching condition
5. EVENT HANDLERS: onClick={() => code} runs when user clicks
6. PROPS vs STATE: Props come from parent, State is internal to component
7. KEY PROP: Helps React track list items efficiently (use unique ID)
8. CONDITIONAL RENDERING: Show different UI based on conditions (&&, ternary)
*/