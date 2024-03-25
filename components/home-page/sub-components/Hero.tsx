"use client";

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

    const content = useContentContext();

    return (
        <section className="homepage-hero section-styles bg-pale-yellow">
            Hero
        </section>
    )
};

export default Hero;