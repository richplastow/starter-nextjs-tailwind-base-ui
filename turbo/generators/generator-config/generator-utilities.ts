/** @file Helper utilities for generators. */

import type { PlopTypes } from "@turbo/gen";

export const getGroupNamePrompt = (
  message: string,
): PlopTypes.PromptQuestion => {
  return {
    type: "input",
    name: "group",
    message,
    validate: (input: string) => {
      if (input === "") return "The group name is not optional!";
      if (input.replace(/\s/g, "") === "") return "Contains only space!";
      if (input.length > 24) return "Contains more than 24 characters!";
      if (input.length < 2) return "Contains less than 2 characters!";
      if (input.includes("-")) return "Contains a hyphen!";
      if (!/^[a-z][-a-z]+$/.test(input)) return "Not kebab-case!";
      return true;
    },
  };
};

export const getNounPrompt = (
  message: string,
  prefix?: string,
): PlopTypes.PromptQuestion => {
  return {
    type: "input",
    name: "noun",
    message,
    validate: (input) => {
      if (input === "") return "The noun is not optional!";
      if (input.replace(/\s/g, "") === "") return "Contains only space!";
      if (input.length > 24) return "Contains more than 24 characters!";
      if (input.length < 2) return "Contains less than 2 characters!";
      if (!/^[A-Z]/.test(input)) return "Does not start A-Z!";
      if (!/^[A-Z][A-Za-z0-9]+$/.test(input)) return "Not PascalCase!";
      if (prefix && input.startsWith(prefix))
        return (
          '"' +
          prefix +
          '" will be auto-added! Enter "' +
          input.slice(prefix.length) +
          '" instead.'
        );
      return true;
    },
  };
};
