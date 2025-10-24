"use client";

import Image from "next/image";

const StudentPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#3E4645] flex flex-col">
      {/* Top Header */}
      <header className="w-full bg-[#3E4645] text-white shadow-md flex items-center justify-between px-10 py-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Abundant Harvest Aquaponics Logo"
            width={300}
            height={70}
            priority
          />
        </div>

        {/* Center: AquaGuide title */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-wide">AquaGuide</h1>
          <span className="text-4xl">🐟</span>
        </div>

        {/* Right side spacer */}
        <div className="w-[250px]" />
      </header>

      {/* Main content area with sidebar */}
      <main className="flex flex-1 w-full bg-white">
        {/* Left side: Student Mode and Chat */}
        <section className="flex-1 flex flex-col items-center justify-center py-12">
          {/* Student Mode Heading */}
          <h2 className="text-3xl font-semibold text-gray-700 italic mb-10">
            Student Mode
          </h2>

          {/* Chat Box */}
          <div className="w-full max-w-2xl bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6">
            <div className="flex flex-col space-y-4">
              {/* Example Chat Messages */}
              <div className="self-start bg-green-700 text-white px-4 py-2 rounded-lg max-w-[80%]">
                Hi! My name is AquaGuide. How can I help you today?
              </div>
              <div className="self-end bg-gray-200 text-black px-4 py-2 rounded-lg max-w-[80%]">
                What is aquaponics?
              </div>
            </div>

            {/* Input Section */}
            <div className="mt-6 flex items-center border border-gray-400 rounded-lg overflow-hidden">
              <textarea
                placeholder="Type your message..."
                className="flex-1 p-3 outline-none resize-none text-gray-800"
                rows={2}
              ></textarea>
              <button className="text-black px-6 text-xl h-full">
                ▶
              </button>
            </div>
          </div>
        </section>

        {/* Right side: General Resources */}
        <aside className="w-72 border-l border-gray-300 bg-white p-8">
          <h3 className="text-blue-700 font-bold text-xl mb-4">
            General Resources:
          </h3>
          <ul className="space-y-3 text-blue-700 underline">
            <li>
              <a
                href="https://www.youtube.com/watch?v=eHAdvcepLaY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:text-blue-900"
              >
                Aquaponic Systems
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=1q_MN4kZRlY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:text-blue-900"
              >
                How to Start
              </a>
            </li>
            <li>
              <a href="/quiz" className="text-base hover:text-blue-900">
                Quiz
              </a>
            </li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default StudentPage;
