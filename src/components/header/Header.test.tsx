import { describe, it, expect } from "vitest";
import { Header } from "./Header";
import { render, screen } from "@testing-library/react";

describe("test the header", () => {
  it("should render links to different pages", () => {
    render(<Header />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("matchmake.ink")).toBeInTheDocument();

    // we use alt text because we assume that there are fun icons
    expect(screen.getByAltText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByAltText("Team")).toHaveAttribute("href", "/team");
    expect(screen.getByAltText("Profile")).toHaveAttribute("href", "/profile");
    expect(screen.getByAltText("Settings")).toHaveAttribute(
      "href",
      "/settings"
    );

    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
