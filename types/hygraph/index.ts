import { AboutPageTypes } from "./aboutPageTypes";
import { ContactPageTypes } from "./contactPageTypes";
import { HomePageTypes } from "./homePageTypes";

export type ContentType = {
  content: {
    homePage: HomePageTypes,
    aboutPage: AboutPageTypes,
    contactPage: ContactPageTypes
  }
};