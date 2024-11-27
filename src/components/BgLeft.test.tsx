import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BgLeft from "./BgLeft";

describe("BgLeft component", () => {
  it("renders backgorund image", () => {
    render(<BgLeft />);
    const image = screen.getByTestId("bg-left");
    expect(image).toBeInTheDocument();
  });
});
