"use client";

import { Chatbox } from "@/components/Chatbox";
import { ResourcesTab } from "@/components/ResourcesTab";
import Image from "next/image";
import Link from "next/link";

const EducatorPage = () => {
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
            <section className="flex-1 flex flex-col items-center justify-center py-12">
              {/* Student Mode Heading */}
              <h2 className="text-3xl font-semibold text-gray-700 italic mb-10">
                Educator Mode
              </h2>
    
              {/* Chat Box */}
              <Chatbox />
            </section>
    
            {/* Right side: General Resources */}
            <ResourcesTab showQuiz={false}/>
          </main>
        </div>
      );
    };

export default EducatorPage