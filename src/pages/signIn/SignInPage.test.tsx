import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SignInPage from "./SignInPage";

describe("SignIn Component", () => {
  it("renders 'This is sign in page'", () => {
    render(<SignInPage />);
    const textElement = screen.getByText("This is the SignInPage");
    expect(textElement).toBeInTheDocument();
  });
});
