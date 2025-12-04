export default function Nav() {
  return (
    <nav className="bg-green-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span>🍊</span>
            <span>Som 'O'</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-100 transition">Home</a>
            <a href="#" className="hover:text-green-100 transition">About</a>
            <a href="#" className="hover:text-green-100 transition">Services</a>
            <a href="#" className="hover:text-green-100 transition">Contact</a>
          </div>
          
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}