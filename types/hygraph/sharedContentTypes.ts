export type NavItem = {
    displayText: string,
    link: string,
    isExternalLink: boolean
   }
   
   type Navbar = {
    mobileHeading: string,
    navItems: Array<NavItem>
   }
   
   export type SharedContent = {
    navbar: Navbar,
    footer: {
     header: string
    }
   };