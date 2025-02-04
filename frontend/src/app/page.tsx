import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Use Coupon <strong>&quot;RX&quot;</strong> for 15% Off. Members Area Last Updated: July 2024
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold">How to Ace Your Restructuring Interview</h1>
          <p className="mt-4 text-lg">
            From cap tables to cramdowns, discover how RX investment banking works and get over 500 restructuring interview questions.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Over the past few years, I&apos;ve realized how absurdly unprepared most candidates are when they interview for restructuring jobs…
        </h2>
        <p className="text-lg leading-relaxed">
          Frankly speaking, there are two types of people who interview for elite restructuring jobs, whether they’re undergraduates, lateral hires from M&A, or MBA/JD students:
        </p>
        <ul className="mt-6 space-y-2 text-lg">
          <li><strong>1.</strong> Those who have a friend in restructuring who has coached them through what restructuring is and how to answer restructuring interview questions.</li>
          <li><strong>2.</strong> Everyone else.</li>
        </ul>
      </div>
    </div>
  );
}
