"use client";

// Node Modules
import {useState} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Types
import {NavItem} from '@/types/hygraph/sharedContentTypes';
type Props = {
 navItemDetails: NavItem,
 onClick: () => void;
};

const NavItem: React.FC<Props> = ({navItemDetails, onClick}) => {
const {
    displayText,
    link,
    isExternalLink
} = navItemDetails;
 const [showIcon, setShowIcon] = useState<boolean>(false);
 const pathname = usePathname();

 return (
   <div
     onMouseEnter={() => setShowIcon(true)}
     onMouseLeave={() => setShowIcon(false)}
     className="nav-item flex items-center my-1.5"
   >
    {isExternalLink ?
      (
         <a
           href={link}
           className={`no-hover-animate`}
           onClick={onClick}
           target="_blank"
           rel="noreferrer"
         >
          {displayText}
         </a>
      ) :
      (
        <Link
          href={link}
          legacyBehavior
        >
         <a
           className={`${pathname === link && 'current'} no-hover-animate`}
           onClick={onClick}
         >
          {displayText}
         </a>
        </Link>
      )
    }
    <span className={`flex items-center ml-1 nav-item-icon ${showIcon && "icon-active"}`}>
    <span className="material-symbols-rounded">{isExternalLink ? "open_in_new" : "arrow_right_alt"}</span>
    </span>

   </div>
 );
};

export default NavItem;