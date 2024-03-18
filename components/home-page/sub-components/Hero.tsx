"use client";

// Types
type Props = {};

// Contexts
import { useContentContext } from "@/components/contexts/ContentContext";

const Hero: React.FC<Props> = () => {

    const content = useContentContext();

    console.log("content:", content);

    return (
        <section className="homepage-hero">
            Hero
        </section>
    )
};

export default Hero;