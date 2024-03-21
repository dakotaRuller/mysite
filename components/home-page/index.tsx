// Components
import Hero from "./sub-components/Hero";

// Types
type Props = {};

const HomePage: React.FC<Props> = () => {

    return (
        <div className="homepage-container">
            <h1 className="text-3xl bebas-neue">HomePage Container</h1>
            <Hero />
        </div>
    )
};

export default HomePage;