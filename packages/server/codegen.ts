import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

export default {
  schema: "**/schema.graphql",
  generates: {
    "src/schema": defineConfig(),
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
} satisfies CodegenConfig;
