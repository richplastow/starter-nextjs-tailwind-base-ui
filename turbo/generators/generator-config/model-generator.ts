/** @file Defines an interface/class generator for the 'model' package. */

import type { PlopTypes } from "@turbo/gen";
import { getGroupNamePrompt, getNounPrompt } from "./generator-utilities";

export const modelGenerator: PlopTypes.PlopGeneratorConfig = {
  description: "Generates a new model, eg packages/model/my-group/my-model/",
  prompts: [
    getGroupNamePrompt('Please provide the group name, eg "animal"'),
    getNounPrompt('Please provide a noun, eg "Cat" or "GoldFish"'),
  ],
  actions: [
    {
      type: "addMany", // https://plopjs.com/documentation/#addmany
      destination: "packages/model/{{group}}/{{kebabCase noun}}",
      templateFiles: "templates/model-template/*.hbs",
      base: "templates/model-template/",
    },
  ],
};
