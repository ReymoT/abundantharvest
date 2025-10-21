import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img
        src="..\logo.png"
        alt="Abundant Harvest Aquaponics Logo"
        width="600"
      />
      <h2>AquaGuide 🐟</h2>
      <p>Before you begin, select the option that best describes you.</p>

      <div className="button-group">
        <Link href="/student">
          <Button>Student</Button>
        </Link>
        <Link href="/educator">
          <Button>Educator</Button>
        </Link>
        <Link href="/parent">
          <Button>Parent</Button>
        </Link>
        <Link href="/other">
          <Button>Other</Button>
        </Link>
      </div>
    </main>
  );
}
