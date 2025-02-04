export default function Contact() {
  return (
    <div className="p-12 bg-white shadow-md rounded-lg max-w-lg mx-auto mt-20">
      <h1 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h1>
      <form className="space-y-4 mt-6">
        <input type="text" placeholder="Your Name" className="border p-3 w-full rounded-md" />
        <input type="email" placeholder="Your Email" className="border p-3 w-full rounded-md" />
        <textarea placeholder="Message" className="border p-3 w-full h-32 rounded-md"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
