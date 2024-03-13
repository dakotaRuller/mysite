import dotenv from 'dotenv';
dotenv.config();

// Node Modules
import { GraphQLClient as hygraphClient, gql } from 'graphql-request';

// Queries
import {
  aboutPageQuery,
  contactPageQuery,
  homePageQuery,
  workPageQuery
} from './queries';

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

const aboutPageContent = () => buildQuery(gql`${aboutPageQuery}`);
const contactPageContent = () => buildQuery(gql`${contactPageQuery}`);
const homePageContent = () => buildQuery(gql`${homePageQuery}`);
const workPageContent = () => buildQuery(gql`${workPageQuery}`);

export {
  aboutPageContent,
  contactPageContent,
  homePageContent,
  workPageContent
};
