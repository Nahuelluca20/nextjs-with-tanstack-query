export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full space-y-4 max-w-[1280px] mx-auto">
      <h1 className="ml-4 text-3xl font-bold">Characters</h1>
      {children}
    </div>
  );
}
