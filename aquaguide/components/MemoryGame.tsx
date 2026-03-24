"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PairData = {
  pairKey: string;
  content: string;
};

type MemoryCard = {
  id: string;
  pairKey: string;
  content: string;
};

const BASE_PAIRS: PairData[] = [
  { pairKey: "ammonia", content: "Ammonia" },
  { pairKey: "ammonia", content: "Fish waste starts as ammonia." },
  { pairKey: "nitrate", content: "Nitrate" },
  { pairKey: "nitrate", content: "Main nutrient plants absorb." },
  { pairKey: "roots", content: "Plant Roots" },
  { pairKey: "roots", content: "Roots filter and use nutrients." },
  { pairKey: "bacteria", content: "Good Bacteria" },
  { pairKey: "bacteria", content: "Convert ammonia into safer forms." },
  { pairKey: "oxygen", content: "Oxygen" },
  { pairKey: "oxygen", content: "Helps fish and bacteria thrive." },
  { pairKey: "cycle", content: "Water Cycle" },
  { pairKey: "cycle", content: "Water flows tank -> grow bed -> tank." },
];

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function buildDeck(): MemoryCard[] {
  return shuffle(BASE_PAIRS).map((pair, index) => ({
    id: `${pair.pairKey}-${index}-${Math.random().toString(36).slice(2, 8)}`,
    pairKey: pair.pairKey,
    content: pair.content,
  }));
}

export function MemoryGame() {
  const [cards, setCards] = useState<MemoryCard[]>(() => buildDeck());
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("Pick two cards to find a match.");
  const [isResolvingTurn, setIsResolvingTurn] = useState(false);

  const totalPairs = BASE_PAIRS.length / 2;
  const matchesFound = matchedCards.length / 2;
  const allMatched = matchedCards.length === cards.length && cards.length > 0;

  const cardMap = useMemo(() => {
    return new Map(cards.map((card) => [card.id, card]));
  }, [cards]);

  useEffect(() => {
    if (flippedCards.length !== 2) {
      return;
    }

    setIsResolvingTurn(true);
    setAttempts((prev) => prev + 1);

    const [firstId, secondId] = flippedCards;
    const firstCard = cardMap.get(firstId);
    const secondCard = cardMap.get(secondId);

    if (!firstCard || !secondCard) {
      setFlippedCards([]);
      setIsResolvingTurn(false);
      return;
    }

    if (firstCard.pairKey === secondCard.pairKey) {
      setMatchedCards((prev) => [...prev, firstId, secondId]);
      setFeedback("Nice match!");
      setFlippedCards([]);
      setIsResolvingTurn(false);
      return;
    }

    setFeedback("Try again");
    const timeout = window.setTimeout(() => {
      setFlippedCards([]);
      setIsResolvingTurn(false);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [cardMap, flippedCards]);

  useEffect(() => {
    if (allMatched) {
      setFeedback("You matched all cards!");
    }
  }, [allMatched]);

  function handleFlip(cardId: string) {
    if (isResolvingTurn) return;
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (matchedCards.includes(cardId)) return;
    setFlippedCards((prev) => [...prev, cardId]);
  }

  function restartGame() {
    setCards(buildDeck());
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
    setIsResolvingTurn(false);
    setFeedback("New game started. Find all matching pairs!");
  }

  return (
    <Card className="w-full max-w-4xl border-gray-200 bg-white shadow-md">
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl text-gray-800">Memory Card Matching Game</CardTitle>
        <p className="text-sm text-gray-600">
          Match aquaponics concepts by finding pairs. Tap any two cards per turn.
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-4">
          <div className="rounded-md bg-gray-100 px-3 py-2">Attempts: {attempts}</div>
          <div className="rounded-md bg-gray-100 px-3 py-2">
            Matches: {matchesFound}/{totalPairs}
          </div>
          <div className="rounded-md bg-gray-100 px-3 py-2 sm:col-span-2">{feedback}</div>
        </div>

        <div
          className="grid grid-cols-3 gap-3 sm:grid-cols-4"
          role="grid"
          aria-label="Memory card matching board"
        >
          {cards.map((card) => {
            const isFlipped = flippedCards.includes(card.id);
            const isMatched = matchedCards.includes(card.id);
            const isRevealed = isFlipped || isMatched;

            return (
              <button
                key={card.id}
                type="button"
                role="gridcell"
                aria-label={`Memory card ${isMatched ? "matched" : isRevealed ? "revealed" : "hidden"}`}
                aria-pressed={isRevealed}
                onClick={() => handleFlip(card.id)}
                disabled={isMatched || isResolvingTurn}
                className="group h-24 cursor-pointer rounded-lg bg-transparent [perspective:1000px] disabled:cursor-not-allowed"
              >
                <span
                  className={`relative block h-full w-full rounded-lg border border-gray-300 text-left shadow-sm transition-transform duration-500 [transform-style:preserve-3d] ${
                    isRevealed ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#3E4645] p-2 text-center text-xs font-semibold text-white [backface-visibility:hidden] sm:text-sm">
                    AquaGuide
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-emerald-100 p-2 text-center text-xs font-medium text-gray-800 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:text-sm">
                    {card.content}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            onClick={restartGame}
            className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
          >
            Restart Game
          </Button>
          {allMatched && (
            <span className="rounded-md bg-green-100 px-3 py-2 text-sm font-medium text-green-800">
              Great job! You solved the board.
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
