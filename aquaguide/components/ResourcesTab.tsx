import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const ResourcesTab = () => {
  return (
    <aside className="w-72 border-l bg-white p-6">
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="text-white text-lg font-semibold">
            General Resources
          </CardTitle>
        </CardHeader>

        <CardContent>
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
                href="/faq"
                className="flex items-center text-white hover:text-gray-500 transition-colors text-sm font-medium"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
};
