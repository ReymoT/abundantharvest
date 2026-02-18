"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMemo, useState } from "react";

type Evaluation = {
  correct: boolean;
  message: string;
  correctAnswer?: string;
  explanation?: string; 
};

export default function QuizPage() {
  const [mcq, setMcq] = useState<string>("");
  const [fill, setFill] = useState<string>("");
  const [truth, setTruth] = useState<string>("");
  const [shortA, setShortA] = useState<string>("");
  const [results, setResults] = useState<{
    mcq?: Evaluation;
    fill?: Evaluation;
    truth?: Evaluation;
    shortA?: Evaluation;
  }>({});

  const correct = useMemo(
    () => ({
      mcq: "B",
      fill: "ammonia",
      truth: "false",
      shortA: "nitrate",
    }),
    []
  );

  const explanations = useMemo(
  () => ({
    mcq: "Aquaponics = aquaculture (fish) + hydroponics (plants) + beneficial bacteria that convert fish waste into plant nutrients.",
    fill: "Fish waste breaks down into ammonia, which is toxic to fish in high amounts, so it needs to be processed/filtered by bacteria.",
    truth: "Nitrosomonas bacteria convert ammonia → nitrite first. Nitrobacter comes after and converts nitrite → nitrate.",
    shortA: "Nitrate is the final product of nitrification and is the main form of nitrogen plants absorb as a nutrient.",
  }),
  []
);


  function normalize(value: string): string {
    return value.trim().toLowerCase();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const mcqEval: Evaluation =
      normalize(mcq) === normalize(correct.mcq)
        ? { correct: true, message: "Correct!" , explanation: explanations.mcq}
        : {
            correct: false,
            message: "Incorrect.",
            correctAnswer: "B) Aquaculture, Hydroponics, and Bacterial Filtration",
            explanation: explanations.mcq,
          };

    const fillEval: Evaluation = normalize(fill) === correct.fill
      ? { correct: true, message: "Correct!", explanation: explanations.fill }
      : { correct: false, message: "Incorrect.", correctAnswer: "Ammonia", explanation: explanations.fill };

    const truthEval: Evaluation = normalize(truth) === correct.truth
      ? { correct: true, message: "Correct!", explanation: explanations.truth }
      : {
        correct: false,
        message: "Incorrect.",
        correctAnswer: "False (The first step is Nitrosomonas converting ammonia to nitrite.)",
        explanation: explanations.truth,
        };

    const shortEval: Evaluation = normalize(shortA) === correct.shortA
      ? { correct: true, message: "Correct!", explanation: explanations.shortA }
      : { correct: false, message: "Incorrect.", correctAnswer: "Nitrate", explanation: explanations.shortA };

    setResults({ mcq: mcqEval, fill: fillEval, truth: truthEval, shortA: shortEval });
  }

  const totalCorrect = useMemo(() => {
    return (
      (results.mcq?.correct ? 1 : 0) +
      (results.fill?.correct ? 1 : 0) +
      (results.truth?.correct ? 1 : 0) +
      (results.shortA?.correct ? 1 : 0)
    );
  }, [results]);

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Quiz</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset className="space-y-3">
            <legend className="font-medium">Multiple Choice</legend>
            <p>An aquaponic system combines which three main components?</p>
            <div className="mt-2 space-y-2">
              {[
                { key: "A", label: "A) Aquaculture, Hydroponics, and Mechanical Filters" },
                { key: "B", label: "B) Aquaculture, Hydroponics, and Bacterial Filtration" },
                { key: "C", label: "C) Fish, Soil, and Water Pumps" },
                { key: "D", label: "D) Plants, Fish, and Sunlight" },
              ].map((opt) => (
                <label key={opt.key} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mcq"
                    value={opt.key}
                    checked={mcq === opt.key}
                    onChange={(e) => setMcq(e.target.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
            
            {results.mcq && (
              <div
                className={`mt-3 rounded border p-3 ${
                  results.mcq.correct
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <p className="font-semibold">{results.mcq.message}</p>

                {!results.mcq.correct && results.mcq.correctAnswer ? (
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">Correct answer:</span>{" "}
                    {results.mcq.correctAnswer}
                  </p>
                ) : null}

                {results.mcq.explanation ? (
                  <p className="mt-1 text-sm text-gray-700">
                    <span className="font-semibold">Explanation:</span>{" "}
                    {results.mcq.explanation}
                  </p>
                ) : null}
              </div>
            )}

          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-medium">Fill-in-the-Blank</legend>
            <label className="block">
              Fish waste and uneaten food contain _____________, which must be filtered out of the water.
            </label>
            <input
              type="text"
              className="w-full max-w-md border border-gray-300 rounded px-3 py-2"
              value={fill}
              onChange={(e) => setFill(e.target.value)}
            />
            {results.fill && (
              <div
                className={`mt-3 rounded border p-3 ${
                  results.fill.correct
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <p className="font-semibold">{results.fill.message}</p>

                {!results.fill.correct && results.fill.correctAnswer ? (
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">Correct answer:</span>{" "}
                    {results.fill.correctAnswer}
                  </p>
                ) : null}

                {results.fill.explanation ? (
                  <p className="mt-1 text-sm text-gray-700">
                    <span className="font-semibold">Explanation:</span>{" "}
                    {results.fill.explanation}
                  </p>
                ) : null}
              </div>
            )}
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-medium">True or False</legend>
            <p>
              The first step in the bacterial filtration process is when Nitrobacter bacteria convert nitrite into nitrate.
            </p>
            <div className="mt-2 space-y-2">
              {[
                { key: "true", label: "True" },
                { key: "false", label: "False" },
              ].map((opt) => (
                <label key={opt.key} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="truth"
                    value={opt.key}
                    checked={truth === opt.key}
                    onChange={(e) => setTruth(e.target.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          {results.truth && (
            <div
              className={`mt-3 rounded border p-3 ${
                results.truth.correct
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <p className="font-semibold">{results.truth.message}</p>

              {!results.truth.correct && results.truth.correctAnswer ? (
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Correct answer:</span>{" "}
                  {results.truth.correctAnswer}
                </p>
              ) : null}

              {results.truth.explanation ? (
                <p className="mt-1 text-sm text-gray-700">
                  <span className="font-semibold">Explanation:</span>{" "}
                  {results.truth.explanation}
                </p>
              ) : null}
            </div>
          )}
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-medium">Short Answer</legend>
            <label className="block">
              What is the final substance produced by the bacteria that flows into the plant trays to serve as "food for the plants"?
            </label>
            <input
              type="text"
              className="w-full max-w-md border border-gray-300 rounded px-3 py-2"
              value={shortA}
              onChange={(e) => setShortA(e.target.value)}
            />
            {results.shortA && (
              <div
                className={`mt-3 rounded border p-3 ${
                  results.shortA.correct
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <p className="font-semibold">{results.shortA.message}</p>

                {!results.shortA.correct && results.shortA.correctAnswer ? (
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">Correct answer:</span>{" "}
                    {results.shortA.correctAnswer}
                  </p>
                ) : null}

                {results.shortA.explanation ? (
                  <p className="mt-1 text-sm text-gray-700">
                    <span className="font-semibold">Explanation:</span>{" "}
                    {results.shortA.explanation}
                  </p>
                ) : null}
              </div>
            )}
          </fieldset>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <Button
                type="submit"
                className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </Button>
              <Button
                variant={"default"}
                type="button"
                className="cursor-pointer border border-gray-300 px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => {
                  setMcq("");
                  setFill("");
                  setTruth("");
                  setShortA("");
                  setResults({});
                }}
              >
                Reset
              </Button>
            </div>
            <Link
              href="/"
            >
              <Button
                variant={"default"}
                type="button"
                className="cursor-pointer border border-gray-300 px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => {
                  setMcq("");
                  setFill("");
                  setTruth("");
                  setShortA("");
                  setResults({});
                }}
              >
                Home
              </Button>
            </Link>
          </div>

          {Object.keys(results).length > 0 && (
            <p className="pt-4 text-lg font-semibold">
              Score: {totalCorrect}/4
            </p>
          )}
        </form>
      </main>
    </div>
  );
}


