export default function Nav() {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-3 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with icon */}
          <div className="flex items-center gap-2">
            <div className="text-3xl">🍊</div>
            <div className="text-2xl font-bold tracking-wide">Som 'O'</div>
          </div>
          
          {/* Menu Items */}
          <div className="flex gap-8">
            <a href="#" className="hover:text-green-200 transition font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-green-200 transition font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-green-200 transition font-medium relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-green-200 transition font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all group-hover:w-full"></span>
            </a>
          </div>
          
          {/* CTA Button */}
          <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 hover:shadow-lg transition transform hover:-translate-y-0.5">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}