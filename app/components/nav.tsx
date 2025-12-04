// Navigation Component
// This is the header/navbar that appears at the top of every page
// It contains: logo, menu links, and sign-in button

export default function Nav() {
  return (
    // Navigation bar with green background
    // bg-green-600: green background color
    // text-white: white text color
    // py-4: padding top and bottom (16px)
    <nav className="bg-green-600 text-white py-4">
      {/* Container to center content and set max width */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Flex layout to arrange items horizontally with space between */}
        <div className="flex justify-between items-center">
          
          {/* Logo Section - Left side */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span>🍊</span>
            <span>Som 'O'</span>
          </div>
          
          {/* Menu Links - Center */}
          <div className="flex gap-6">
            {/* Each link has hover effect that changes text color */}
            <a href="#" className="hover:text-green-100 transition">Home</a>
            <a href="#" className="hover:text-green-100 transition">About</a>
            <a href="#" className="hover:text-green-100 transition">Services</a>
            <a href="#" className="hover:text-green-100 transition">Contact</a>
          </div>
          
          {/* Sign In Button - Right side */}
          {/* bg-white: white background to stand out */}
          {/* text-green-600: green text color */}
          {/* hover:bg-gray-100: slightly gray when hovering */}
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}