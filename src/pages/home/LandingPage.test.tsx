import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import LandingPage from "./LandingPage";

describe("LandingPage Component", () => {
  it("renders 'This is landing page'", () => {
    render(<LandingPage />);
    const textElement = screen.getByText("This is landing page");
    expect(textElement).toBeInTheDocument();
  });
});
