export default function Banner() {
  return (
    <div className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-green-800">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative text-center z-10 px-4">
        <div className="mb-6 inline-block">
          <div className="text-7xl mb-4 animate-bounce">🍹🍊</div>
        </div>
        <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">
          Welcome to <span className="text-orange-300">Som 'O'</span>
        </h1>
        <p className="text-2xl text-green-100 mb-8 font-light">
          Discover amazing drinks and fresh fruits
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}