"use client";

// Node Modules
import React, {  useState } from "react";
import Link from "next/link";

// Contexts
import { useContentContext } from "@/components/contexts/ContentContext";

// Components
import NavItem from "./sub-components/NavItem";

// Types
type Props = {};

const Nav: React.FC<Props> = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState<boolean>(false);
  const toggleMobileNavbar = (): void => {
    // Disable scrolling while mobile nav is active
    if(window.innerWidth <= 769) {
      const scrollBehavior = !isMobileNavActive ? "hidden" : "scroll";
      const body = document.querySelector("body") as HTMLElement;
      body.style.overflow = scrollBehavior;
    }

    setIsMobileNavActive(!isMobileNavActive);
  };

  const { navbar: navbarContent } = Object.values(useContentContext().content)[0].sharedContent;

  return (
    <nav className="navbar-wrapper">
      <button
        className={`nav-toggle ${isMobileNavActive && "mobile-active"}`}
        onClick={() => toggleMobileNavbar()}
        tabIndex={0}>
        <div className="bar-1 bg-dark-grey"/>
        <div className="bar-2 bg-dark-grey"/>
        <div className="bar-3 bg-dark-grey"/>
      </button>
      <div className={`navbar-content ${isMobileNavActive && "mobile-active"} flex flex-col justify-center items-center md:items-start`}>
        {navbarContent.navItems.map(
          navItem => 
            (
              <NavItem 
                navItemDetails={navItem} 
                onClick={() => toggleMobileNavbar()} 
                key={navItem.displayText}
              />
            )
        )}
      </div>
      <span className="desktop-content-seperator"></span>
    </nav>
  );
};

export default Nav;