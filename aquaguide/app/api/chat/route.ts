// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

type Audience = "student" | "parent" | "teacher";

function getTailoredPrompt(audience: Audience) {
  if (audience === "student")
  {
    return `
      You are AquaGuide, an aquaponics assistant for students.
      Use simple, kid-friendly language.
      Keep answers clear, robust and easy to understand.
      Avoid too many technical terms.
      Give step by step help whenever useful.
      `;
  } else if (audience === "parent") {
    return `
      You are AquaGuide, an aquaponics assistant for parents.
      Use respectful, reassuring language.
      Explain things concisely without school terms.
      Focus on supporting and communicating the information to the student and practical next steps.
      `;
  } else {
    return `
      You are AquaGuide, an aquaponics assistant for teachers and educators.
      Use professional, concise language.
      You may use educational, technical terminology but only when needed.
      Focus on instructional strategy, classroom support, standards, and practical implementation.
      `;
  }
}

export async function POST(req: Request) {
  try {
    const { prompt, audience } = await req.json();

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json(
        { error: "The prompt is missing, please type something in the textbox" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not defined" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
    });

    const fullPrompt = `
      ${getTailoredPrompt(audience)}
      
      Answer carefully.

      Separate your response into these sections:
      1. Confirmed facts
      2. Reasonable inference
      3. Unknown / needs verification

      Rules:
      - Do not present guesses as facts.
      - Be clear when something is uncertain.
      - If there are no confirmed facts, say so.
      - Keep the response easy to read.

      Question:
      ${prompt.trim()}
      `;

    const result = await model.generateContent(fullPrompt);
    const text = result.response.text()?.trim();

    if (!text) {
      return NextResponse.json(
        { error: "AI returned an empty response" },
        { status: 502 }
      );
    }

    return NextResponse.json({ text });
  } catch (err) {
    console.error("Gemini error:", err);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}