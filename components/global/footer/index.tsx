"use client";

// Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Contexts
import { useContentContext } from "@/components/contexts/ContentContext";

// Types
type Props = {};

/* 
    This is being done here due to the fact that doing this at a higher level such as the layout component
    on the server causes the library to not be initiated which results in the FontAwesomeIcon component to break.
    
    Additionally the font awsome icons will only be used in the footer so they do not need to be avalible at 
    a global level. Icons used at a global level will come from google icons.
*/
library.add(fab);

const Footer: React.FC<Props> = () => {
    const content = useContentContext();

    return (
        <footer className="footer-wrapper">
            <FontAwesomeIcon className="fa-brand-icon" icon={["fab", "linkedin"]}/>
        </footer>
    )
};

export default Footer;