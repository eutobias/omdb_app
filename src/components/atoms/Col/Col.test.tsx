import {describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';

import { Col } from '.';

describe("Col", () => {
  test("should render", () => {
    const {getByText} = render(<Col>Test</Col>);
    expect(getByText("Test")).toBeDefined();
  });
});