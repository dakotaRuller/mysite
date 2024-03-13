// Node Modules
import type { Metadata } from "next";

// Components
import Nav from "@/components/global/nav";

// Styles
import { Bebas_Neue, Poppins } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Dakota Ruller",
  description: "Build and designed by me",
};

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <main>
          <Nav/>
          {children}
          <span className="material-symbols-outlined">
            settings_accessibility
          </span>
        </main>
      </body>
    </html>
  );
};
