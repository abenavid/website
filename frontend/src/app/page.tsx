export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 text-gray-800">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Use Coupon <strong>&quot;RX&quot;</strong> for 15% Off. Members Area Last Updated: July 2024
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] flex items-center justify-center text-center text-white bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-extrabold">Master Turnaround Consulting</h1>
          <p className="mt-4 text-lg">
            Gain expert insights on turnaround consulting, learn how to ace your interviews, and prepare for a high-impact career in restructuring.
          </p>
        </div>
      </div>

      {/* Section: What is Turnaround Consulting? */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">What is Turnaround Consulting?</h2>
        <p className="text-lg leading-relaxed">
          Turnaround consulting is the process of advising financially distressed companies to help them regain stability, improve operations, and avoid bankruptcy. 
          Consultants analyze a company&apos;s financial health, identify inefficiencies, and implement strategies to restore profitability.
        </p>
        <p className="text-lg mt-4">
          Turnaround professionals work in <strong>corporate finance, strategy, and restructuring</strong>, often collaborating with investment banks, private equity firms, and creditors.
        </p>
      </section>

      {/* Section: Why are Turnaround Consultants Hired? */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Are Turnaround Consultants Hired?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Financial Distress:</strong> When companies struggle with declining revenue, liquidity issues, and excessive debt.</li>
          <li><strong>Operational Challenges:</strong> Inefficient processes, high costs, and supply chain disruptions require expert intervention.</li>
          <li><strong>Pre-Bankruptcy Planning:</strong> Companies facing insolvency need restructuring advisors to explore alternatives like debt refinancing or asset sales.</li>
          <li><strong>Stakeholder Confidence:</strong> Investors, lenders, and management teams seek expert guidance for turnaround execution.</li>
        </ul>
      </section>

      {/* Section: Turnaround vs. Restructuring Banking */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          How Is Turnaround Consulting Different from Restructuring Banking?
        </h2>
        <table className="w-full border-collapse border border-gray-300 mt-6 text-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Turnaround Consulting</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Restructuring Banking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Focus</td>
              <td className="border border-gray-300 px-4 py-2">Operational &amp; financial stabilization</td>
              <td className="border border-gray-300 px-4 py-2">Financial advisory on restructuring deals</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Typical Clients</td>
              <td className="border border-gray-300 px-4 py-2">Mid-size to large companies in distress</td>
              <td className="border border-gray-300 px-4 py-2">Corporations, lenders, and PE firms</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">End Goal</td>
              <td className="border border-gray-300 px-4 py-2">Rebuilding a profitable business</td>
              <td className="border border-gray-300 px-4 py-2">Advising on bankruptcy &amp; M&amp;A deals</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section: Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Exclusive Turnaround Consulting Course</h2>
        <p className="text-lg mb-6">
          Get full access to expert-led content, case studies, and exclusive interview prep materials.
        </p>
        <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700">
          Enroll Now - $149
        </button>
      </section>
    </div>
  );
}
