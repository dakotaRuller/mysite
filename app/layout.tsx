// Node Modules
import type { Metadata } from "next";
import { headers } from "next/headers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Components
import Nav from "@/components/global/nav";
import Footer from "@/components/global/footer";

// Styles
import { Bebas_Neue, Poppins } from "next/font/google";
import "@/styles/globals.css";

// Contexts
import { ContentProvider } from "@/components/contexts/ContentContext";

// Lib
import { getPageContent } from "@/lib/hygraph";

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

library.add(fab);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathName = headersList.get("x-pathname");
  let pageContent;
  try {
    pageContent = await getPageContent(pathName);
  } catch (error) {
    console.log("ERROR RETRIEVING CONTENT: ", error);
    pageContent = {content: "Oops there was a problem please try again later"};
  }

  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable} text-base`}>
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="p-1 bg-white text-black">
        <main>
          <ContentProvider content={pageContent}>
            <>
              <Nav/>
              <div className="page-content-container">
                {children}
              </div>
              <Footer />
            </>
          </ContentProvider>
        </main>
      </body>
    </html>
  );
};
