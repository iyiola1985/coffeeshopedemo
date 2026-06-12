import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roastory | Premium Artisan Coffee",
  description:
    "Every Great Day Begins With Exceptional Coffee. Discover premium artisan coffee crafted with passion from the world's finest origins.",
  keywords: ["coffee", "premium coffee", "artisan coffee", "subscription", "roastory"],
  openGraph: {
    title: "Roastory | Premium Artisan Coffee",
    description: "Every Great Day Begins With Exceptional Coffee",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
