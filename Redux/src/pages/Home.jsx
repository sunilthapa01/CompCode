import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Headphones",
      price: 99.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 129.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30e?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Camera",
      price: 599.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      title: "Sunglasses",
      price: 149.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div
        className="bg-cover bg-center h-96 relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=60")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to MyShop
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover amazing products at unbeatable prices.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
