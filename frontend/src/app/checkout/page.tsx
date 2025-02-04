export default function Checkout() {
  return (
    <div className="p-12 bg-white shadow-md rounded-lg max-w-lg mx-auto mt-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
      <p className="mt-4 text-gray-700">Complete your purchase for <span className="font-bold">$29</span>.</p>
      <button className="mt-6 bg-green-600 text-white px-8 py-4 rounded-lg text-lg shadow-md hover:bg-green-700 transition">
        Proceed to Payment
      </button>
    </div>
  );
}
