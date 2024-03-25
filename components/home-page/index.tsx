// Components
import Hero from "./sub-components/Hero";

// Types
type Props = {};

const HomePage: React.FC<Props> = () => {

    return (
        <div className="homepage-container flex items-center justify-evenly w-full">
            <Hero />
        </div>
    )
};

export default HomePage;