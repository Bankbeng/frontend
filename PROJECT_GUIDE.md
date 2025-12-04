# Som 'O' Project - Beginner's Guide

This guide explains how the Som 'O' project works so you can understand and modify it easily.

## 📁 Project Structure

```
beng-singhalath/
├── app/
│   ├── layout.tsx          (Main page template - wraps all pages)
│   ├── page.tsx            (Home page)
│   ├── globals.css         (Global CSS styles)
│   └── components/         (Reusable UI components)
│       ├── nav.tsx         (Navigation bar at top)
│       ├── banner.tsx      (Large banner image)
│       ├── content.tsx     (Products grid and filters)
│       └── footer.tsx      (Footer at bottom)
├── lib/
│   └── api.js              (Functions to fetch data from backend)
└── public/
    └── (all images and icons)
```

## 🏗️ How Components Work

### 1. **Nav.tsx** - Navigation Bar
- Appears at top of page
- Shows logo, menu links, and sign-in button
- Uses **flexbox layout** to arrange items horizontally

**Key Classes:**
- `bg-green-600`: Green background
- `flex justify-between`: Spreads items left, center, right
- `hover:text-green-100`: Changes color on hover

### 2. **Banner.tsx** - Hero Banner
- Large image at top
- Uses `bg-[url('/banner.png')]` to set background image from public folder
- `h-96`: Sets fixed height (384px)
- `bg-cover bg-center`: Fills container and centers image

### 3. **Footer.tsx** - Footer
- Dark green section at bottom
- Shows company info, links, and social media
- Uses **grid layout**: `grid-cols-1 md:grid-cols-4`
  - 1 column on phones, 4 columns on tablets/desktop

### 4. **Content.tsx** - Products Display (Most Complex)

#### State Variables (React Hooks):
```javascript
const [products, setProducts] = useState([]);      // All products from API
const [categories, setCategories] = useState([]); // All categories
const [loading, setLoading] = useState(true);     // Loading spinner state
const [error, setError] = useState(null);         // Error message
const [selectedCategory, setSelectedCategory] = useState('all'); // Active filter
```

#### How It Works:

1. **Component Mounts** → `useEffect` runs → Calls `fetchData()`
2. **fetchData()** → Calls API → Gets products & categories
3. **API Response** → Stores in state → Component re-renders
4. **User Clicks Filter** → `selectedCategory` changes → Filters products
5. **Product Grid** → Shows filtered products

#### Three States:

**Loading State:**
```
Show spinning loader while fetching data from API
```

**Error State:**
```
If API fails, show error message with "Try Again" button
```

**Success State:**
```
- Show category filter buttons at top
- Show grid of product cards
- Each card shows: image, category tag, name, price, stock, buttons
```

#### Category Filtering:

```javascript
// When user clicks "All" or a category, this updates
const filteredProducts = selectedCategory === 'all' 
  ? products  // Show all
  : products.filter(product => product.cat_id === selectedCategory); // Filter by ID
```

#### Product Card Structure:
```
┌─────────────────────┐
│ [IMAGE]    [TAG]    │  (relative positioning)
│                     │
├─────────────────────┤
│ Product Name        │  (truncated to 2 lines)
├─────────────────────┤
│ $99.99    In Stock   │
├─────────────────────┤
│ [Add to Cart] [👁️] │
└─────────────────────┘
```

## 🎨 Tailwind CSS Classes (Key ones used)

### Layout:
- `flex` - Horizontal layout
- `grid` - Grid layout
- `gap-4` - Spacing between items
- `items-center` - Vertical center
- `justify-between` - Space items apart

### Responsive:
- `sm:` - Small screens (tablets)
- `md:` - Medium screens (laptops)
- `lg:` - Large screens

Example: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
= 1 column phone → 2 columns tablet → 3 columns desktop

### Colors:
- `bg-green-600` - Background color
- `text-white` - Text color
- `hover:bg-green-700` - Change on hover

### Sizing:
- `h-48` - Height 192px
- `w-full` - 100% width
- `px-4` - Left/right padding 16px
- `py-8` - Top/bottom padding 32px

### Effects:
- `rounded-lg` - Border radius
- `shadow-md` - Shadow effect
- `transition` - Smooth animation
- `hover:scale-105` - Grow 5% on hover

## 📡 API Connection

### api.js Contains:
```javascript
getProducts()   // Fetches from http://localhost:3000/api/products
getCategories() // Fetches from http://localhost:3000/api/categories
```

### Response Format:
```javascript
{
  data: [
    {
      id: 1,
      name: "Apple",
      price: 29.99,
      cat_id: 1,
      image: "/apple.jpg"
    }
  ]
}
```

## 🔄 Data Flow Diagram

```
┌─────────────────┐
│ Component Mount │
└────────┬────────┘
         ↓
    ┌─────────┐
    │useEffect│
    └────┬────┘
         ↓
   ┌──────────────┐
   │ fetchData()  │
   └────┬─────────┘
        ↓
   ┌─────────────────┐
   │Call API URLs    │
   │(getProducts,    │
   │getCategories)   │
   └────┬────────────┘
        ↓
   ┌──────────────────┐
   │API Response      │
   │Update state with │
   │setProducts()     │
   │setCategories()   │
   └────┬─────────────┘
        ↓
   ┌──────────────────┐
   │Component Renders │
   │Shows data on page│
   └──────────────────┘
```

## ✏️ How to Modify

### Change Colors:
Search for `bg-green-600` or `text-green-600` and replace with different Tailwind colors

### Change Text:
Find the text in component files and edit directly

### Add New Filter:
Categories are fetched from API, so add new categories in your backend database

### Change Layout:
Modify `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` to different breakpoints

### Add Product Fields:
If API returns new fields (e.g., `rating`), add to the card display

## 🚀 Common Tasks

### Increase product grid columns on desktop:
```tsx
// Change from 4 columns to 5
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
```

### Change button color:
```tsx
// Change from green-600 to blue-600
className="bg-blue-600 hover:bg-blue-700"
```

### Add a new section:
```tsx
<div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold mb-4">Section Title</h2>
  {/* Your content here */}
</div>
```

### Show/hide element on mobile:
```tsx
{/* Hidden on small screens, shown on large screens */}
<div className="hidden lg:block">
  Only visible on desktop
</div>
```

## 📝 Notes for Beginners

1. **Tailwind Classes** - All styling uses class names, not CSS files
2. **React State** - When state changes, component re-renders with new data
3. **map() function** - Creates multiple elements from array data
4. **ternary operator** - `condition ? ifTrue : ifFalse` (one-line if-else)
5. **Props** - Data passed to components (if used)
6. **Responsive Design** - Different layouts for phone/tablet/desktop

## 🐛 Debugging Tips

1. **Check Browser Console** - Press F12, see error messages
2. **Check API Connection** - Make sure backend is running on localhost:3000
3. **Check Image Paths** - Make sure images are in `/public` folder
4. **Use console.log()** - Add to print values in browser console

Good luck learning! 🚀
