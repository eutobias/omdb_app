import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { BaseContainer } from '.';

describe("BaseContainer", () => {
  test("should render", () => {
    const { getByText } = render(<BaseContainer>OMDB App</BaseContainer>);
    const element = getByText("OMDB App");
    expect(element).toBeDefined();
  });

  test("should render a div by default", () => {
    const { getByText } = render(<BaseContainer>OMDB App</BaseContainer>);
    expect(getByText("OMDB App").nodeName === "DIV").toBeTruthy()
  })

  test("should render a aside", () => {
    const { getByText } = render(<BaseContainer as="aside">OMDB App</BaseContainer>);
    expect(getByText("OMDB App").nodeName === "ASIDE").toBeTruthy()
  })
});