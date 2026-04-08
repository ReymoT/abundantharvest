import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ResourcesTabProps = {
  showQuiz?: boolean;
  showLessonPlanGenerator?: boolean;
};

export const ResourcesTab = ({showQuiz = true, showLessonPlanGenerator = false}: ResourcesTabProps) => {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/nPXuEpyCfMg");
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
            <li className="flex flex-col items-start space-y-2 text-left">
              <a className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium" href="https://www.youtube.com/watch?v=nPXuEpyCfMg&list=PLiauylj3wIVvEpCBPGWDeFXibpSibF-a7">YouTube playlist: click below to select a video <ExternalLink className="h-4 w-4 ml-1 opacity-70" /></a>
              <select onChange={(e) => setVideoUrl(e.target.value)} className="w-full bg-black text-white text-sm">
                <option value="https://www.youtube.com/embed/nPXuEpyCfMg">Basic Aquaponics...</option>
                <option value="https://www.youtube.com/embed/zQugf-Va0Gg">What is Aquaponics?</option>
                <option value="https://www.youtube.com/embed/URYuFOlz-KY">3 Easiest DIY Aqu...</option>
                <option value="https://www.youtube.com/embed/yhcAOE2JOVs">Starting Your First...</option>
                <option value="https://www.youtube.com/embed/0QQA5BpWKec">Aquaponics Design...</option>
                <option value="https://www.youtube.com/embed/T15gXm6ha_I">Backyard Aquapo...</option>
                <option value="https://www.youtube.com/embed/0EklopLQqyk">Hydroponics 101</option>
                <option value="https://www.youtube.com/embed/Nqxmz0cL-F0">Make your own...</option>
              </select>
              {videoUrl && (
                <iframe id="vidFrame"
                src={videoUrl}
                allowFullScreen
                width={200}
                // height={50}
              />)}
            </li>
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
};
