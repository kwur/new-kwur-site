// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_USER_ID,
  // Get this from tina.io
  token: process.env.TINA_READONLY_ID,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "_posts"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        fields: [
          {
            type: "string",
            name: "title",
            nameOverride: (/* @__PURE__ */ new Date()).toISOString().substring(0, 9) + "-title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "layout",
            default: "post"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
