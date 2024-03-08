// Node Modules
import type { Metadata } from "next";

// Components
import Nav from "@/components/global/nav";

// Styles
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Dakota Ruller",
  description: "Build and designed by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  );
};
