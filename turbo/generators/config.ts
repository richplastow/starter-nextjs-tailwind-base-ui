/** @file Defines various kinds of generators. Use `turbo gen` to run. */

import type { PlopTypes } from "@turbo/gen";
import { modelGenerator } from "./generator-config/model-generator";
import { xxComponentGenerator } from "./generator-config/xx-component-generator";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("model", modelGenerator);
  plop.setGenerator("xx-component", xxComponentGenerator);
}
