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
        aboutTickerText,
        aboutMeHeaderText,
        aboutMeLink
      }
    }
  } = useContentContext();
  const splitHeader = aboutMeHeaderText.split(" ");

  return (
    <section className="about-me-container section-styles bg-pastel-yellow relative">
      <h3 className="about-me-header">
        {splitHeader.map(
          (word: string, key: number) => <span key={word+key} className="header-word">{word}</span>)
        }
        <span className="styled-period">.</span>
      </h3>
      <AboutMeTicker tickerItemsArray={aboutTickerText}/>
    </section>
  );
};

export default AboutMe;