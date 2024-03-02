import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center ">
      <div className="flex gap-5 flex-col">
        <Button asChild>
          <Link href={"/characters"}>Get Characters with TanStack Query</Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={"/route-handler"}>Get Characters with Route Handler</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"/posts"}>Go to posts</Link>
        </Button>
      </div>
    </main>
  );
}
