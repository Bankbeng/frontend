export default function Nav() {
  return (
    <nav className="bg-green-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-3 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">Som 'O'</div>
          
          {/* Menu Items */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-200 transition">Home</a>
            <a href="#" className="hover:text-blue-200 transition">About</a>
            <a href="#" className="hover:text-blue-200 transition">Services</a>
            <a href="#" className="hover:text-blue-200 transition">Contact</a>
          </div>
          
          {/* CTA Button */}
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-50 transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}