import React from "react";

const products = [
  {
    title: "Restructuring Interview Package",
    description: "Get all seventeen restructuring interview guides.",
    price: "$29",
    available: true,
  },
  {
    title: "Advanced RX Case Studies",
    description: "Detailed restructuring case studies and solutions.",
    price: "$49",
    available: true,
  },
  {
    title: "Networking & Application Strategy",
    description: "Exclusive insights on networking for RX roles.",
    price: "",
    available: false,
  },
  {
    title: "Technical Deep Dive: RX Accounting",
    description: "In-depth accounting guide for restructuring finance.",
    price: "$39",
    available: true,
  },
  {
    title: "One-on-One Coaching Session",
    description: "A personal session with a restructuring expert.",
    price: "",
    available: false,
  },
  {
    title: "HETA Hunting",
    description: "Expert guide on Warzone.",
    price: "$59",
    available: true,
  },
];

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-20"> {/* Added more padding */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Choose the right package for you.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            {product.available ? (
              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                Buy Now - {product.price}
              </button>
            ) : (
              <button className="mt-4 bg-gray-400 text-white px-6 py-2 rounded-md cursor-not-allowed">
                Sold Out
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
