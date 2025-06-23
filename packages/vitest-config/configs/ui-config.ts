import { defineProject, mergeConfig } from "vitest/config";
// @ts-expect-error
import { baseConfig } from "./base-config.ts";

export const uiConfig = mergeConfig(
  baseConfig,
  defineProject({
    test: {
      environment: "jsdom",
      setupFiles: ["../../packages/vitest-config/configs/vitest-setup.ts"],
    },
  }),
);
