import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://152.228.215.94:83/api",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "./src/shared/gql/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: "@apollo/client",
      },
    },
  },
};
export default config;
