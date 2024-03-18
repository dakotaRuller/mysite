// Components
import Hero from "./sub-components/Hero";

// Types
type Props = {};

const HomePage: React.FC<Props> = () => {

    return (
        <div className="homepage-container">
            HomePage Container
            <Hero />
        </div>
    )
};

export default HomePage;