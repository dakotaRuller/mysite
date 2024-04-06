"use client";

// Contexts
import { useContentContext } from "@/components/contexts/ContentContext";

// Components
import AboutMeTicker from "./AboutMeTicker";

// Types
type Props = {};

const AboutMe: React.FC<Props> = () => {
  const {
    content: {
      homePage: {
        aboutTickerText
      }
    }
  } = useContentContext();

  return (
    <section className="about-me-container section-styles bg-pastel-yellow relative">
      <AboutMeTicker tickerItemsArray={aboutTickerText}/>
    </section>
  );
};

export default AboutMe;