
   
type Navbar = {
  mobileHeading: string,
  navItems: Array<ButtonOrLink>
}

export type ButtonOrLink = {
  displayText: string,
  link: string,
  isExternalLink: boolean
}
   
export type SharedContent = {
  navbar: Navbar,
  footer: {
    header: string
  }
};