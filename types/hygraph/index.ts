import { AboutPageTypes } from "./aboutPageTypes";
import { ContactPageTypes } from "./contactPageTypes";
import { HomePageTypes } from "./homePageTypes";

type ContentType = {
  content: {
    homePage: HomePageTypes,
    aboutPage: AboutPageTypes,
    contactPage: ContactPageTypes
  }
};

export default ContentType;