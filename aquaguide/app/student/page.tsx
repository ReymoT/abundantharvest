"use client";

import { Chatbox } from "@/components/Chatbox";
import { MemoryGame } from "@/components/MemoryGame";
import { ResourcesTab } from "@/components/ResourcesTab";
import Image from "next/image";
import Link from "next/link";

// Drop this file at: app/student/page.tsx (or wherever you want it routed)
// This wires up the chatbox so it immediately replies with "test".

type Msg = { id: string; role: "user" | "bot"; text: string };

export default function StudentPage() {
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

      {/* Main content area with sidebar */}
      <main className="flex flex-1 w-full bg-white">
        {/* Left side: Student Mode and Chat */}
        <section className="flex-1 flex flex-col items-center py-12 px-6">
          {/* Student Mode Heading */}
          <h2 className="text-3xl font-semibold text-gray-700 italic mb-10">
            Student Mode
          </h2>

          {/* Chat Box */}
          <Chatbox audience="student" />

          <div className="mt-10 w-full max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold text-gray-800">Quiz and Games</h3>
              <Link
                href="/quiz"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Open Full Quiz
              </Link>
            </div>
            <MemoryGame />
          </div>
        </section>

        {/* Right side: General Resources */}
        <ResourcesTab />
      </main>
    </div>
  );
}
