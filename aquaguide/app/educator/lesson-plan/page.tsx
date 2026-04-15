"use client";

import { LessonPlanGenerator } from "@/components/LessonPlanGenerator";
import Image from "next/image";
import Link from "next/link";

const LessonPlanPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#3E4645] flex flex-col">
      {/* Top Header */}
      <header className="w-full bg-[#3E4645] text-white shadow-md flex items-center justify-between px-10 py-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="Abundant Harvest Aquaponics Logo"
              width={300}
              height={70}
              priority
            />
          </Link>
        </div>

        {/* Center: AquaGuide title */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-wide">AquaGuide</h1>
          <span className="text-4xl">🐟</span>
        </div>

        {/* Right side spacer */}
        <div className="w-[250px]" />
      </header>

      {/* Main content area */}
      <main className="flex flex-1 w-full bg-white h-[calc(100vh-118px)] overflow-hidden">
        <section className="flex-1 flex flex-col items-center justify-start py-8 px-8 overflow-y-auto w-full">
          {/* Educator Mode Heading */}
          <div className="w-full max-w-4xl flex items-center justify-between mb-4">
            <h2 className="text-3xl font-semibold text-gray-700 italic">
              Educator Mode: Lesson Planner
            </h2>
            <Link
              href="/educator"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Back to Chat
            </Link>
          </div>

          {/* Lesson Plan Generator */}
          <LessonPlanGenerator />
        </section>
      </main>
    </div>
  );
};

export default LessonPlanPage;
