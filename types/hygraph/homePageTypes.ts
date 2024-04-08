import { RichTextContent } from "@graphcms/rich-text-types";
import { SharedContent, ButtonOrLink } from "./sharedContentTypes";

// type for data from the hygraph api
export type HomePageTypes = {
  aboutMeHeaderText: string,
  aboutMeLink: ButtonOrLink,
  aboutTickerText: Array<string>,
  headerLine1: string,
  headerLine2: string,
  subHeader: string,
  subHeaderHoverText: RichTextContent,
  sharedContent: SharedContent,
};

// type for structured data on the front end
export type HomePageContentType = {
  homePage: HomePageTypes
};