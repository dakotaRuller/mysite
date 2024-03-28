"use client";

// Node Modules
import Image from "next/image";
import testImg from "../../../assets/images/test-image.jpg";

// Types
type Props = {};

// Contexts
import { useContentContext } from "@/components/contexts/ContentContext";

/*
STYLE THE HERO HEADER AND USE A STYLE LIKE WHAT YOU SAW IN THAT 
YOUTUBE VID(DIFFERENT SECTIONS WITH MARGIN AND OR BORDER RADIUS AT THE BOTTOM ON BOTH SIDES) 
KEEP THE THEME BUT ADJUST IT A BIT FOR MODERN TRENDS
*/

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
    return (
        <section className="homepage-hero-container section-styles flex flex-col-reverse items-center justify-between lg:flex-row">
            <div className="hero-image">
                <Image
                    alt="test image"
                    src={testImg}
                    fill={true}
                    objectFit="cover"
                />
            </div>  
            <div className="flex flex-col items-end justify-evenly pr-8 self-end">
                <h1 className="hero-header font-bebas-neue animate-header-1 text-4xl text-nowrap">{headerLine1}</h1>
                <h1 className="hero-header font-bebas-neue animate-header-2 text-4xl text-nowrap">{headerLine2}</h1>
                <p className="hero-sub-header animate-sub-header text-l text-nowrap">{subHeader}</p>
            </div>
        </section>
    )
};

export default Hero;