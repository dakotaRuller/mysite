"use client";

// Node Modules
import React, {  useState } from "react";
import Link from "next/link";

// Contexts
import { useContentContext } from "@/components/contexts/ContentContext";

// Types
type Props = {};

const Nav: React.FC<Props> = () => {
  const content = useContentContext();

 return (
   <nav className="global-nav bebas-neue">Navbar</nav>
 );
};

export default Nav;