import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center ">
      <div className="flex gap-5 flex-col">
        <Button asChild>
          <Link href={"/tanstack/characters"}>Get Characters with TanStack Query</Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={"/tanstack/characters"}>Get Characters without TanStack Query</Link>
        </Button>
      </div>
    </main>
  );
}
