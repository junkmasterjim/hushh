import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

const jbm = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hushh",
  description: "White noise generator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-hidden" suppressHydrationWarning>
      <body className={jbm.className}>
        <TooltipProvider>
          <div className="appContainer">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
