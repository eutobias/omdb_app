import { describe, expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { Button } from ".";
import { useState } from "react";

const MockButton = () => {
  const [label, setLabel] = useState<string>("Click Me");
  const handleClick = () => setLabel("You Clicked");

  return <Button onClick={handleClick}>{label}</Button>;
};

describe("Button", () => {
  test("should render", () => {
    const { getByText } = render(<MockButton />);
    expect(getByText("Click Me")).toBeDefined();
  });

  test("should change label on click", () => {
    const { getByText } = render(<MockButton />);
    const button = getByText("Click Me");

    fireEvent.click(button, () => {});

    expect(button.textContent).toBe("You Clicked");
  });
});
