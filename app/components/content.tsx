import Image from "next/image";

export default function Content() {
  // Sample product data
  const products = [
    {
      id: 1,
      image: "/apple.jpg",
      product_name: "Product 1",
      price: 29.99,
      category: "Electronics",
    },
    {
      id: 2,
      image: "/banana.jpg",
      product_name: "Product 2",
      price: 49.99,
      category: "Clothing",
    },
    {
      id: 3,
      image: "/berry.jpg",
      product_name: "Product 3",
      price: 19.99,
      category: "Accessories",
    },
    {
      id: 4,
      image: "/grape.jpg",
      product_name: "Product 4",
      price: 39.99,
      category: "Electronics",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
              <Image
                src={product.image}
                alt={product.product_name}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.product_name}
              </h3>

              <p className="text-sm text-gray-500 mb-3">{product.category}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Buy Button */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
