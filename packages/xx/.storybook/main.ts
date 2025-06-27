import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {},
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/*.stories.tsx"],
};
export default config;
