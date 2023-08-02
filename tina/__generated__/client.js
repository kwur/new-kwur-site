import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/9b365103-638a-43d2-aff5-a20f64830810/github/main', token: '6fff45af5617c185074ef187d67b8a1cc4aca7e4', queries });
export default client;
  