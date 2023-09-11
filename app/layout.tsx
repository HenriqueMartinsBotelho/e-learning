import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Learning",
  description: "Um site de estudos!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "antialiased bg-deep-blue-100 px-4 flex items-center justify-center text-white"
        )}
      >
        <main className="max-w-[1628px] w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
