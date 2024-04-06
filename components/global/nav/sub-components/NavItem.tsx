"use client";

// Node Modules
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Types
import { NavItem } from "@/types/hygraph/sharedContentTypes";
type Props = {
 navItemDetails: NavItem,
 onClick: () => void;
};

const NavItem: React.FC<Props> = ({ navItemDetails, onClick }) => {
  const {
    displayText,
    link,
    isExternalLink
  } = navItemDetails;
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const pathname = usePathname();
  const isActivePageLink = pathname === link;

  return (
    <div
      onMouseEnter={() => {
        if (isActivePageLink) return;
        setShowIcon(true);
      }}
      onMouseLeave={() => setShowIcon(false)}
      className="nav-item flex items-center my-1.5"
    >
      {isExternalLink ?
        (
          <a
            href={link}
            className={"no-hover-animate"}
            onClick={onClick}
            target="_blank"
            rel="noreferrer"
            tabIndex={0}
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
              className={`${isActivePageLink && "active-page-link text-2xl flex flex-row-reverse items-center"} no-hover-animate`}
              onClick={() => {
                if (isActivePageLink) return;
                onClick();
              }}
              tabIndex={0}
            >
              {displayText}
              {isActivePageLink && <span className="active-page-link-underline mr-1.5 bg-black"></span>}
            </a>
          </Link>
        )
      }
      <span className={`nav-item-icon flex items-center ml-1 ${showIcon && "icon-active"}`}>
        <span className="material-symbols-rounded">{isExternalLink ? "open_in_new" : "arrow_right_alt"}</span>
      </span>

    </div>
  );
};

export default NavItem;