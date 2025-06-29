import type { Preview } from "@storybook/react";

// "../dist/index.css" here would break HMR of Tailwind styles in storybook:dev.
import "../src/styles.css";

const preview: Preview = {};

export default preview;
