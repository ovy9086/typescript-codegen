import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "examples/schema.graphql",
  documents: ["**/*.tsx", "**/*.gql"],
  generates: {
    "lib/apis/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: { afterAllFileWrite: ["npx prettier --write"] },
};

export default config;
