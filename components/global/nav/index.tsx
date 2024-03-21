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


// ADD ONCLICK FN TO REMOVE THE NAVBAR WHEN NAV ITEM IS CLICKED


const Nav: React.FC<Props> = () => {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  const toggleMobileNavbar = (): void => {
    // Disable scrolling while mobile nav is active
    if(window.innerWidth <= 769) {
    const scrollBehavior = !isNavActive ? 'hidden' : 'scroll';
    document.querySelector("body").style.overflow = scrollBehavior;
  }

  setIsNavActive(!isNavActive)
 };

  const {navbar: navbarContent} = Object.values(useContentContext().content)[0].sharedContent;

 return (
   <nav className="navbar-wrapper">
    <button
        className={`nav-toggle ${isNavActive && 'active'}`}
        onClick={() => toggleMobileNavbar()}>
        <div className="bar-1 bg-dark-grey"/>
        <div className="bar-2 bg-dark-grey"/>
        <div className="bar-3 bg-dark-grey"/>
    </button>
    <div className={`navbar-content ${isNavActive && 'active'} flex flex-col justify-center`}>
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
   </nav>
 );
};

export default Nav;