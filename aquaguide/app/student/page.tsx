"use client";

import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Drop this file at: app/student/page.tsx (or wherever you want it routed)
// This wires up the chatbox so it immediately replies with "test".

type Msg = { id: string; role: "user" | "bot"; text: string };

export default function StudentPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hi! I am AquaGuide. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollerRef = useRef<HTMLDivElement>(null);

  // auto-scroll to the latest message
  useEffect(() => {
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function send(text: string) {
    if (!text.trim()) return;

    const id = (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID()
      : String(Date.now());

    const userMsg: Msg = { id, role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);

    // dummy reply
    const botMsg: Msg = { id: id + "-bot", role: "bot", text: "test" };
    setTimeout(() => setMessages((prev) => [...prev, botMsg]), 120);
  }

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
        <section className="flex-1 flex flex-col items-center justify-start py-12">
          {/* Student Mode Heading */}
          <h2 className="text-3xl font-semibold text-gray-700 italic mb-10">
            Student Mode
          </h2>

          {/* Chat Box */}
          <div className="w-full max-w-2xl bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6">
            {/* Messages */}
            <div
              ref={scrollerRef}
              className="flex flex-col space-y-4 max-h-[50vh] overflow-y-auto pr-1"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={
                    (m.role === "bot"
                      ? "self-start bg-green-700 text-white"
                      : "self-end bg-gray-200 text-black") +
                    " px-4 py-2 rounded-lg max-w-[80%] shadow"
                  }
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input Section */}
            <div className="mt-6 flex items-stretch border border-gray-400 rounded-lg overflow-hidden">
              <textarea
                placeholder="Type your message..."
                className="flex-1 p-3 outline-none resize-none text-gray-800"
                rows={2}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (input.trim()) {
                      const text = input;
                      setInput("");
                      send(text);
                    }
                  }
                }}
              />
              <button
                className="text-gray-500 hover:text-gray-800 transition-colors px-6 py-6 text-xl h-full disabled:opacity-50"
                onClick={() => {
                  const text = input;
                  setInput("");
                  send(text);
                }}
                disabled={!input.trim()}
                aria-label="Submit message"
                title="Submit message"
              >
                <ArrowUpIcon size={30} className="cursor-pointer hover:text-black" />
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
}
