import { AboutPageTypes } from "./aboutPageTypes";
import { ContactPageTypes } from "./contactPageTypes";
import { HomePageTypes } from "./homePageTypes";

export type ContentType = {
  content: {
    [key: string]: AboutPageTypes | ContactPageTypes | HomePageTypes,
  }
};