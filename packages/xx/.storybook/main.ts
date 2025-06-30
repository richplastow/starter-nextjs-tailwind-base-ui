import type { StorybookConfig } from "@storybook/react-vite";

const storybookConfig: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.tsx"],
};

export default storybookConfig;
