import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FooterLandingPage from "./FooterLandingPage";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router";
import HowToUsePage from "../pages/howToUse/HowToUsePage";

describe("FooterLandingPage Component", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <FooterLandingPage />
      </BrowserRouter>,
    );
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
  it("render links", () => {
    render(
      <BrowserRouter>
        <FooterLandingPage />
      </BrowserRouter>,
    );
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });
  });
  it("renders 'How to use' link with correct href", () => {
    render(
      <BrowserRouter>
        <FooterLandingPage />
      </BrowserRouter>,
    );
    const howToUseLink = screen.getByRole("link", { name: /how to use/i });
    expect(howToUseLink).toBeInTheDocument();
    expect(howToUseLink).toHaveAttribute("href", "/how-to-use");
  });

  it("navigates to 'How to use' page on link click", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<FooterLandingPage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
        </Routes>
      </MemoryRouter>,
    );

    const howToUseLink = screen.getByRole("link", { name: /how to use/i });
    expect(howToUseLink).toBeInTheDocument();

    fireEvent.click(howToUseLink);

    expect(screen.getByText("This is the HowToUsePage")).toBeInTheDocument();
  });
});
