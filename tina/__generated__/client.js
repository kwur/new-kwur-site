import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '6fff45af5617c185074ef187d67b8a1cc4aca7e4', queries });
export default client;
  