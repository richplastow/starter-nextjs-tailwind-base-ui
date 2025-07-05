/** @file Defines a component generator for the 'xx' package. */

import type { PlopTypes } from "@turbo/gen";
import { getGroupNamePrompt, getNounPrompt } from "./generator-utilities";

export const xxComponentGenerator: PlopTypes.PlopGeneratorConfig = {
  description:
    "Generates a new Xx component, eg packages/xx/src/my-group/my-component/",
  prompts: [
    getGroupNamePrompt('Please provide the group name, eg "panel"'),
    getNounPrompt('Please provide a noun, eg "Button" or "VideoPlayer"', "Xx"),
  ],
  actions: [
    {
      type: "addMany", // https://plopjs.com/documentation/#addmany
      destination: "packages/xx/src/{{group}}/{{kebabCase noun}}",
      templateFiles: "templates/xx-component-template/*.hbs",
      base: "templates/xx-component-template/",
    },
  ],
};
