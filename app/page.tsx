import Link from "next/link";

import {ModeToggle} from "@/components/mode toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <Link href={"/tanstack/characters"}>Characters</Link>
    </main>
  );
}
