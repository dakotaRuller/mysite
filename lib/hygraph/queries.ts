import { entryIds } from "@/constants/hygraph";

const sharedQuery = `
    sharedContent {
        footer {
          header
        }
        navbar {
          mobileHeading
          navItems {
              displayText
              link
              isExternalLink
            }
          }
        }
    }
`;
   
export const aboutPageQuery = `
   query AboutPage {
     aboutPage(where: {id: "${entryIds.aboutPage}"}) {
       header
       ${sharedQuery}
   }
   `;
   
export const contactPageQuery = `
   query ContactPage {
     contactPage(where: {id: "${entryIds.contactPage}"}) {
       header
       ${sharedQuery}
   }
   `;
   
export const homePageQuery = `
   query Homepage {
     homePage(where: {id: "${entryIds.homePage}"}) {
       headerLine1
       headerLine2
       subHeader
       subHeaderHoverText { 
        raw
       }
       aboutTickerText
       aboutMeHeaderText
       aboutMeLink {
        displayText
        link
        isExternalLink
       }
       ${sharedQuery}
   }
   `;
   
export const workPageQuery = `
   query WorkPage {
     workPage(where: {id: "${entryIds.workPage}"}) {
       header
       ${sharedQuery}
   }
   `;
   
export default {
  aboutPageQuery,
  contactPageQuery,
  homePageQuery,
  workPageQuery
};