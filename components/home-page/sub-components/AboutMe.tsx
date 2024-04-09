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
    <section className="about-me-container section-styles bg-pastel-yellow relative flex flex-col">
      <h3 className="about-me-header flex flex-col ml-3 mt-3">
        {
          splitHeader.map(
            (
              word: string, key: number) => 
              (key + 1 !== splitHeader.length ?
                (<span key={word+key} className="header-word font-bebas-neue text-9xl text-pretty">{word}</span>) :
                (
                  <span key={word+key} className="header-word font-bebas-neue text-9xl text-pretty">
                    {word}
                    <span className="styled-period font-poppins text-9xl text-pale-orange">.</span>
                  </span>
                )
              )
          )
        }
      </h3>
      <AboutMeTicker tickerItemsArray={aboutTickerText}/>
    </section>
  );
};

export default AboutMe;