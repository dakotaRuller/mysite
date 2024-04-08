"use client";

// Node Modules
import { useEffect } from "react";
import Image from "next/image";
import testImg from "../../../assets/images/test-image.jpg";

// Types
type Props = {};

// Contexts
import { useContentContext } from "@/components/contexts/ContentContext";
import { useAppContext } from "@/components/contexts/AppContext";

const Hero: React.FC<Props> = () => {
  const {
    content: {
      homePage: {
        headerLine1 = "",
        headerLine2 = "",
        subHeader = ""
      }
    }
  } = useContentContext();
  const { 
    initialLandingLoad, 
    setInitialLandingLoad
  } = useAppContext();

  const appState = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      setInitialLandingLoad(true);
    }, 4500);
  }, []);
  return (
    <section className="homepage-hero-container section-styles flex flex-col-reverse items-center justify-between lg:flex-row">
      <div className={`hero-image ${initialLandingLoad ? "" : "animate-hero-image"}`}>
        <Image
          alt="test image"
          src={testImg}
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-end justify-evenly pr-8 self-end">
        <h1 className={`hero-header font-bebas-neue ${initialLandingLoad ? "" : "animate-header-1"} text-4xl text-nowrap`}>{headerLine1}</h1>
        <h1 className={`hero-header font-bebas-neue ${initialLandingLoad ? "" : "animate-header-2"} text-4xl text-nowrap`}>{headerLine2}</h1>
        <p className={`hero-sub-header ${initialLandingLoad ? "" : "animate-sub-header"} text-l text-nowrap`}>{subHeader}</p>
      </div>
    </section>
  );
};

export default Hero;