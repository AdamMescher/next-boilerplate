import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import Button from '../../../src/components/Button';

expect.extend(toHaveNoViolations);

describe("App Component", () => {
  it("Should Render without errors", () => {
    const button = <Button>abc 123</Button>;

    render(button);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const button = <Button>abc 123</Button>;
    
    render(button);
    expect(await axe(screen.getByRole('button'))).toHaveNoViolations();
  });
});