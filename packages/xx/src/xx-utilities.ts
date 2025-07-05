/** Utilities for Xx components. */

import { extendTailwindMerge } from "tailwind-merge";

// https://github.com/dcastil/tailwind-merge/blob/main/docs/api-reference.md#extendtailwindmerge
export const twMerge = extendTailwindMerge({
  prefix: "xx-",
});
