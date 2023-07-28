import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { RatingsBadge } from "./RatingsBadge";

describe("RatingsBadge", () => {
  test("should render", () => {
    const { getByText } = render(
      <RatingsBadge icon="imdb_logo" text="9 / 10" />
    );

    expect(getByText("9 / 10")).toBeDefined();
  });
});
