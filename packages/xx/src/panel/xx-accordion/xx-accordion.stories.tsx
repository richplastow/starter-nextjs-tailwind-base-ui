/** @file Defines http://localhost:6006/?path=/docs/xx-panel-xxaccordion */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { XxAccordion } from "./xx-accordion";

// Set up the XxAccordion Storybook stories.
const meta: Meta<typeof XxAccordion> = {
  component: XxAccordion,
  title: "Xx/panel/XxAccordion",
};
export default meta;

// Define just a minimal story for the Storybook sidebar.
type Story = StoryObj<typeof XxAccordion>;
export const BasicUsage: Story = {};
