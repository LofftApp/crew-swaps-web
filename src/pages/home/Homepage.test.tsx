import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Homepage from "./Homepage";

describe("Homepage Component", () => {
  it("renders 'This is homepage'", () => {
    render(<Homepage />);
    const textElement = screen.getByText("This is homepage");
    expect(textElement).toBeInTheDocument();
  });
});
