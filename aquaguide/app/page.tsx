import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, BookOpen, Users, MoreHorizontal } from "lucide-react"

export default function Home() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-screen-md px-4 py-10 text-center">
        <Image
          src="/logo2.png"
          alt="Abundant Harvest Aquaponics Logo"
          width={600}
          height={200}
          priority
          className="mx-auto h-auto w-full max-w-[600px]"
        />
      <h2>AquaGuide 🐟</h2>
      <p>Before you begin, select the option that best describes you.</p>

      <div className="button-mt-6 mt-4 flex flex-wrap items-center justify-center gap-3 transition-all">
        <Link href="/student">
          <Button
            size="lg"
            className="hover:cursor-pointer rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5
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
            className="hover:cursor-pointer rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5
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
            className="hover:cursor-pointer rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5
                       bg-emerald-600 text-white hover:bg-emerald-700
                       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
          >
            <Users className="mr-2 h-4 w-4" />
            Parent
          </Button>
        </Link>
        <Link href="/faq">
          <Button
            size="lg"
            className="hover:cursor-pointer rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5
                       bg-emerald-600 text-white hover:bg-emerald-700
                       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
          >
            <MoreHorizontal className="mr-2 h-4 w-4" />
            FAQ
          </Button>
        </Link>
      </div>
      </div>
    </main>
  );
}
