import type { Metadata } from "next";
import { Antonio, League_Spartan } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

const spartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "The Planets",
  description: "Facts about the planets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      suppressHydrationWarning={true} data-lt-installed="true">
      <body
        className={`${antonio.className} ${spartan.className} antialiased dark
        data-new-gr-c-s-check-loaded="14.1280.0"
-       data-gr-ext-installed=""`}
      >
        {children}
      </body>
    </html>
  );
}
