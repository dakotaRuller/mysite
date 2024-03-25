import dotenv from "dotenv";
dotenv.config();

// Node Modules
import { GraphQLClient as hygraphClient, gql } from "graphql-request";

// Queries
import {
  aboutPageQuery,
  contactPageQuery,
  homePageQuery,
  workPageQuery
} from "./queries";

const hygraphCMS = new hygraphClient(process.env.HYGRAPH_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`
  }
});

// TODO: update param types from any
const buildQuery: any = async (query: any)  => {
  const content = await hygraphCMS.request(query);
  return content;
};

const getPageContent: any = (pathName: string) => {
  let query;
  switch(pathName) {
    case "/about":
      query = aboutPageQuery;
      break;
    case "/blog":
      // Replace this with blog query when the model is created in hygraph
      query = homePageQuery;
      break;
    case "/contact":
      query = contactPageQuery;
      break;
    case "/work":
      query = workPageQuery;
      break;
    default:
      query = homePageQuery;
  };

  return buildQuery(gql`${query}`);
};
export {
  getPageContent
};
