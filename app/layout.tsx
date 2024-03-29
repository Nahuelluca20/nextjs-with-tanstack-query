import type {Metadata} from "next";

import {Inter as FontSans} from "next/font/google";

import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {cn} from "@/lib/utils";
import QueryProviders from "@/providers/query-provider";
import Navbar from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "TanStack + Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <Navbar />
          <div className="mt-32 mb-10 p-5">
            <QueryProviders>{children}</QueryProviders>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
