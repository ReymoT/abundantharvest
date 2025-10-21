import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap, BookOpen, Users, MoreHorizontal } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <img
        src="..\logo.png"
        alt="Abundant Harvest Aquaponics Logo"
        width="600"
      />
      <h2>AquaGuide 🐟</h2>
      <p>Before you begin, select the option that best describes you.</p>

      <div className="button-mt-6 mt-2 flex flex-wrap items-center justify-center gap-3 transition-all">
        <Link href="/student">
          <Button
            size="lg"
            className="rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5
                       bg-emerald-600 text-white hover:bg-emerald-700
                       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
          >
            <GraduationCap className="mr-2 h-4 w-4" />
            Student
          </Button>
        </Link>
        <Link href="/educator">
          <Button
            size="lg"
            className="rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5
                       bg-emerald-600 text-white hover:bg-emerald-700
                       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Educator
          </Button>
        </Link>
        <Link href="/parent">
          <Button
            size="lg"
            className="rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5
                       bg-emerald-600 text-white hover:bg-emerald-700
                       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
          >
            <Users className="mr-2 h-4 w-4" />
            Parent
          </Button>
        </Link>
        <Link href="/other">
          <Button
            size="lg"
            className="rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5
                       bg-emerald-600 text-white hover:bg-emerald-700
                       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
          >
            <MoreHorizontal className="mr-2 h-4 w-4" />
            Other
          </Button>
        </Link>
      </div>
    </main>
  );
}
