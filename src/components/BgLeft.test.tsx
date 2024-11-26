import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BgImage from "./BgLeft";

describe("BgImage component", () => {
  it("renders backgorund image", () => {
    render(<BgImage />);
    const image = screen.getByTestId("bg-image");
    expect(image).toBeInTheDocument();
  });
});
