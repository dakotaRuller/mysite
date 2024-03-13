// Lib
import {homePageContent} from "@/lib/hygraph";

// Contexts
import { ContentProvider } from "@/components/contexts/ContentContext";

export default async function Home() {
  let pageContent;
  try {
    pageContent = await homePageContent();
  } catch (error) {
    console.log("ERROR RETRIEVING CONTENT: ", error);
    pageContent = "Sorry there was a problem please try again later";
  }

  return (
    <ContentProvider content={pageContent}>
      <div>Home Page</div>
    </ContentProvider>
  );
};
