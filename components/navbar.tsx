import Link from "next/link";

import {ModeToggle} from "./mode toggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full py-5 px-5 bg-background z-10">
      <nav className="flex justify-between w-full max-w-[1280px] mx-auto items-center">
        <Link className="text-xl md:text-2xl font-semibold" href={"/"}>
          NextJS + TanStack Query
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
