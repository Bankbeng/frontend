export default function Banner() {
  return (
    <div className="relative bg-cover bg-center h-30 flex items-center justify-center" style={{ backgroundImage: "url('/unnamed.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Our Store</h1>
        <p className="text-lg text-white">Discover amazing drinks and fruits</p>
      </div>
    </div>
  );
}