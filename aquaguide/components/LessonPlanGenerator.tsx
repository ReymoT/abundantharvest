"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ClipboardList, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LessonPlanGenerator = () => {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [planSections, setPlanSections] = useState<{ title: string; content: string[] }[]>([]);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setError("");
    setPlanSections([]);

    try {
      const res = await fetch("/api/lesson-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: topic }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate plan");
      }

      const data = await res.json();
      parseMarkdown(data.text);
    } catch (err) {
      console.error(err);
      setError("An error occurred while generating the lesson plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const parseMarkdown = (markdown: string) => {
    // Basic parser for "## Title\n- bullet1\n- bullet2\n1. step1"
    const blocks = markdown.split("##").filter((b) => b.trim());
    const sections = blocks.map((block) => {
      const lines = block.trim().split("\n");
      const title = lines[0].trim();
      const content = lines
        .slice(1)
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
      return { title, content };
    });
    setPlanSections(sections);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-12">
      <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 shadow-md border border-gray-200 items-start">
        {/* Left side: Illustration */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center space-y-4">
          <div className="rounded-xl overflow-hidden relative w-full aspect-square border border-gray-200 opacity-90 bg-white p-2">
             <Image
              src="/clipboard.png"
              alt="Teacher Clipboard"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Right side: Form and Results */}
        <div className="flex-1 w-full space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-800">
              <ClipboardList className="h-6 w-6" />
              <h2 className="text-2xl font-bold">AI Lesson Plan Generator</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Quickly generate structured lesson plans for your aquaponics classes.
            </p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. Create a 30-minute aquaponics lesson for middle school."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              style={{ color: "black", backgroundColor: "white" }}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !topic.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 flex items-center gap-2 shadow-sm"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {planSections.length > 0 && (
            <div className="mt-8 space-y-6">
              {planSections.map((section, idx) => (
                <Card key={idx} className="border-emerald-200 shadow-md bg-white">
                  <CardHeader className="bg-emerald-100 py-3 rounded-t-xl border-b border-emerald-200">
                    <CardTitle className="text-lg text-black font-semibold">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 bg-white rounded-b-xl">
                    <ul className="space-y-2 text-black">
                      {section.content.map((line, lineIdx) => {
                         // remove markdown bold ** and simple list bullets like - or 1.
                         const cleanLine = line.replace(/^\s*(?:-\s+|\d+\.\s*\*?)/, '').replace(/\*\*/g, '');
                         return (
                           <li key={lineIdx} className="flex gap-2 items-start">
                             <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                             <span className="text-black">{cleanLine}</span>
                           </li>
                         );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
