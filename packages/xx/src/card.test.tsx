import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Card } from "./card";

test("Card", () => {
  render(
    <Card href="test-href" title="Test Card">
      Test children
    </Card>,
  );
  const a = screen.getByRole("link");
  const h2 = screen.getByRole("heading", { level: 2 });
  const p = screen.getByRole("paragraph");

  expect(a).toHaveAttribute("href", expect.stringContaining("test-href"));
  expect(h2.innerHTML).to.contain("Test Card");
  expect(p.innerHTML).to.equal("Test children");
});
