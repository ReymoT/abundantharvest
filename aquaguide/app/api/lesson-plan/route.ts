import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json(
        { error: "The prompt is missing, please enter a topic." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Mock response if API key is not available
      const mockText = `
## Learning Objectives
- Understand the basics of aquaponics systems
- Identify the roles of fish, plants, and bacteria
- Learn about the nitrogen cycle in a closed ecosystem

## Materials Needed
- Small aquarium or container
- Air pump and airstone
- Grow bed container and clay pebbles
- Small plants (e.g., lettuce, basil)
- Fish (e.g., goldfish or betta)

## Activity Steps
1. Introduce the concept of aquaponics and how it mimics natural ecosystems.
2. Discuss the nitrogen cycle and the importance of bacteria.
3. Have students sketch a diagram of a simple aquaponics system.
4. Set up a small-scale demonstration system as a class.

## Discussion Questions
- How do the fish benefit the plants, and how do the plants benefit the fish?
- What would happen to the system if the bacteria died?
- Why is it important to monitor water chemistry?

## Homework Ideas
- Research another type of symbiotic relationship in nature and write a short paragraph about it.
- Create a list of 5 plants that would grow well in an aquaponics system and explain why.
      `;
      return NextResponse.json({ text: mockText.trim() });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
    });

    const fullPrompt = `
      You are an expert aquaponics educator helping other teachers.
      The teacher has asked you to generate a lesson plan based on the following request:
      "${prompt.trim()}"

      Provide your response formatted strictly with the following sections in Markdown:
      
      ## Learning Objectives
      - (list objectives)
      
      ## Materials Needed
      - (list materials)
      
      ## Activity Steps
      1. (step 1)
      2. (step 2)
      
      ## Discussion Questions
      - (list questions)
      
      ## Homework Ideas
      - (list ideas)

      Ensure the content is detailed, practical, and strictly follows this format. Use professional educational language. Do not output anything outside of these sections.
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
      { error: "Failed to generate lesson plan" },
      { status: 500 }
    );
  }
}
