import React from "react";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full max-w-[1280px] mx-auto space-y-10">
      <h1 className="ml-4 text-3xl font-bold">Posts</h1>
      {children}
    </div>
  );
}
