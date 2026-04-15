import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ResourcesTabProps = {
  showQuiz?: boolean;
  showLessonPlanGenerator?: boolean;
};

export const ResourcesTab = ({showQuiz = true, showLessonPlanGenerator = false}: ResourcesTabProps) => {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=nPXuEpyCfMg");
  return (
    <aside className="w-72 border-l bg-white p-6">
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="text-white text-lg font-semibold">
            General Resources
          </CardTitle>
        </CardHeader>

        <CardContent className="flex justify-center">
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.youtube.com/watch?v=eHAdvcepLaY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium"
              >
                Aquaponic Systems
                <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=1q_MN4kZRlY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium"
              >
                How to Start
                <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
              </a>
            </li>

          {showQuiz && (
            <>
              <li>
                <Link
                  href="/quiz"
                  className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium"
                >
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/student"
                  className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium"
                >
                  Memory Match Game
                </Link>
              </li>
            </>
          )}

          {showLessonPlanGenerator && (
            <>
              <li>
                  <Link
                    href="/educator/lesson-plan"
                    target="_blank"
                    className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium"
                  >
                    AI Lesson Plan Generator
                    <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
                  </Link>
              </li>
              <li>
                  <Link
                    href="/educator/resources"
                    target="_blank"
                    className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium"
                  >
                    Teaching Resources Hub
                    <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
                  </Link>
              </li>
            </>
          )}
            <li>
              <Link
                href="/faq"
                className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium"
              >
                FAQ
              </Link>
            </li>
            <li className="flex flex-col items-start space-y-2 text-left pt-2 border-t border-gray-600 w-full mt-2">
              <a className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium" href="https://www.youtube.com/watch?v=nPXuEpyCfMg&list=PLiauylj3wIVvEpCBPGWDeFXibpSibF-a7" target="_blank" rel="noopener noreferrer">YouTube Playlist <ExternalLink className="h-4 w-4 ml-1 opacity-70" /></a>
              <p className="text-xs text-gray-400">Select a video to watch:</p>
              <div className="flex w-full items-center gap-2">
                <select onChange={(e) => setVideoUrl(e.target.value)} className="flex-1 bg-black outline-none border border-gray-600 text-white text-sm py-1 px-1 rounded">
                  <option value="https://www.youtube.com/watch?v=nPXuEpyCfMg">Basic Aquaponics...</option>
                  <option value="https://www.youtube.com/watch?v=zQugf-Va0Gg">What is Aquaponics?</option>
                  <option value="https://www.youtube.com/watch?v=URYuFOlz-KY">3 Easiest DIY Aqu...</option>
                  <option value="https://www.youtube.com/watch?v=yhcAOE2JOVs">Starting Your First...</option>
                  <option value="https://www.youtube.com/watch?v=0QQA5BpWKec">Aquaponics Design...</option>
                  <option value="https://www.youtube.com/watch?v=T15gXm6ha_I">Backyard Aquapo...</option>
                  <option value="https://www.youtube.com/watch?v=0EklopLQqyk">Hydroponics 101</option>
                  <option value="https://www.youtube.com/watch?v=Nqxmz0cL-F0">Make your own...</option>
                </select>
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 text-xs rounded transition-colors whitespace-nowrap">Open</a>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
};
