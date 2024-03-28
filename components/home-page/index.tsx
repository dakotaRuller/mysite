// Components
import Hero from "./sub-components/Hero";
import AboutMe from "./sub-components/AboutMe";

// Types
type Props = {};

const HomePage: React.FC<Props> = () => {

    return (
        <div className="homepage-container flex flex-col items-center justify-evenly w-full">
            <Hero />
            <AboutMe />
        </div>
    )
};

export default HomePage;