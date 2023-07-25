import {describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';

import { Row } from '.';

describe("Row", () => {
  test("should render", () => {
    const {getByText} = render(<Row>Test</Row>);
    expect(getByText("Test")).toBeDefined();
  });
});