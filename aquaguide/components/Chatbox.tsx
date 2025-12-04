import React, { useState, useRef, useEffect } from 'react'
import { ArrowUpIcon } from "lucide-react";

type Msg = { id: string; role: "user" | "bot"; text: string };

export const Chatbox = () => {
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
    
      async function send(text: string) {
        if (!text.trim()) return;

        const id = typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : String(Date.now());

        const cleanText = text.trim();

        const userMsg: Msg = { id, role: "user", text: cleanText };
        setMessages((prev) => [...prev, userMsg]);

        try {
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: cleanText }),
          });

          if (!res.ok) {
            throw new Error(`HTTP error ${res.status}`);
          }

          const data = await res.json();

          const botMsg: Msg = {
            id: id + "-bot",
            role: "bot",
            text: data.text ?? "Sorry, I couldn’t generate a reply.",
          };

          setMessages((prev) => [...prev, botMsg]);
        } catch (err) {
          console.error(err);
          const botMsg: Msg = {
            id: id + "-bot",
            role: "bot",
            text: "Something went wrong talking to Gemini.",
          };
          setMessages((prev) => [...prev, botMsg]);
        }
}

    return (
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
  )
}