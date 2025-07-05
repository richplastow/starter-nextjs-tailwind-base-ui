import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, chai } from "vitest";

// Unmount any React trees that were mounted with render(), after each test.
// This prevents tests from affecting each other.
afterEach(cleanup);

// Register custom assertion `toHaveAttributes`, to make tests more succinct.
type Attributes = Record<string, string | null | undefined>;
declare global {
  export namespace Chai {
    interface Assertion {
      toHaveAttributes(attributes: Attributes): void;
    }
  }
}
chai.use(({ Assertion }) => {
  Assertion.addMethod("toHaveAttributes", function (attributes: Attributes) {
    const el: HTMLElement = this._obj;
    for (const [key, value] of Object.entries(attributes)) {
      const actual = el.getAttribute(key);
      new Assertion(actual).equals(value);
    }
  });
});
