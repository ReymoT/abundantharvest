"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMemo, useState } from "react";

type Evaluation = {
  correct: boolean;
  message: string;
  correctAnswer?: string;
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

  function normalize(value: string): string {
    return value.trim().toLowerCase();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const mcqEval: Evaluation =
      normalize(mcq) === normalize(correct.mcq)
        ? { correct: true, message: "Correct!" }
        : {
            correct: false,
            message: "Incorrect.",
            correctAnswer: "B) Aquaculture, Hydroponics, and Bacterial Filtration",
          };

    const fillEval: Evaluation =
      normalize(fill) === correct.fill
        ? { correct: true, message: "Correct!" }
        : { correct: false, message: "Incorrect.", correctAnswer: "Ammonia" };

    const truthEval: Evaluation =
      normalize(truth) === correct.truth
        ? { correct: true, message: "Correct!" }
        : {
            correct: false,
            message: "Incorrect.",
            correctAnswer:
              "False (The first step is Nitrosomonas converting ammonia to nitrite.)",
          };

    const shortEval: Evaluation =
      normalize(shortA) === correct.shortA
        ? { correct: true, message: "Correct!" }
        : { correct: false, message: "Incorrect.", correctAnswer: "Nitrate" };

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
              <p className={results.mcq.correct ? "text-green-700" : "text-red-700"}>
                {results.mcq.message}
                {!results.mcq.correct && results.mcq.correctAnswer ? (
                  <span className="block">Correct answer: {results.mcq.correctAnswer}</span>
                ) : null}
              </p>
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
              <p className={results.fill.correct ? "text-green-700" : "text-red-700"}>
                {results.fill.message}
                {!results.fill.correct && results.fill.correctAnswer ? (
                  <span className="block">Correct answer: {results.fill.correctAnswer}</span>
                ) : null}
              </p>
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
              <p className={results.truth.correct ? "text-green-700" : "text-red-700"}>
                {results.truth.message}
                {!results.truth.correct && results.truth.correctAnswer ? (
                  <span className="block">Correct answer: {results.truth.correctAnswer}</span>
                ) : null}
              </p>
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
              <p className={results.shortA.correct ? "text-green-700" : "text-red-700"}>
                {results.shortA.message}
                {!results.shortA.correct && results.shortA.correctAnswer ? (
                  <span className="block">Correct answer: {results.shortA.correctAnswer}</span>
                ) : null}
              </p>
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


