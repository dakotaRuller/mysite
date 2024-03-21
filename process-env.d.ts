declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    HYGRAPH_ENDPOINT: string;
    HYGRAPH_AUTH_TOKEN: string;
  }
}