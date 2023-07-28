import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { InputText } from ".";
import { useState } from "react";

const MockInput = ({
  defaultValue,
  placeholder,
}: {
  defaultValue: string;
  placeholder: string;
}) => {
  const [value, setValue] = useState(defaultValue);
  const handleOnChange = (event:React.SyntheticEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return <InputText placeholder={placeholder} onChange={handleOnChange} />;
};

describe("InputText", () => {
  test("should render and change the value", () => {
    render(<MockInput defaultValue="123" placeholder="test-input" />);

    const input = screen.getByPlaceholderText("test-input");
    fireEvent.change(input, { target: { value: "testando..." } });

    expect(input.value).toBe("testando...");
  });
});
