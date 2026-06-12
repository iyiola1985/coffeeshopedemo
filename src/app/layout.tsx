import type { Metadata } from "next";
import { Oswald, Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taste of Kenya | Speciality Coffee from Kenya",
  description:
    "Speciality coffee from Kenya — simplifying the coffee supply chain. Premium Kenyan coffee sourced directly from the finest farms.",
  keywords: ["coffee", "Kenyan coffee", "speciality coffee", "Taste of Kenya", "direct trade"],
  openGraph: {
    title: "Taste of Kenya | Speciality Coffee from Kenya",
    description: "Speciality coffee from Kenya — simplifying the coffee supply chain",
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
        className={`${oswald.variable} ${barlow.variable} font-body antialiased`}
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
