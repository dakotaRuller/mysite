"use client";

// Contexts
import { useContentContext } from "@/components/contexts/ContentContext";

// Types
type Props = {}

const AboutMe: React.FC<Props> = () => {
    const content = useContentContext();

    return (
        <section className="about-me-container section-styles bg-pastel-yellow">
            About me section
        </section>
    )
};

export default AboutMe;