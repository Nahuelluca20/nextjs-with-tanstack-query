import React from "react";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="space-y-10">
      <h1 className="ml-4 text-3xl font-bold">Travels</h1>
      {children}
    </div>
  );
}
