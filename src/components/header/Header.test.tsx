import { Header } from "./Header";
import { render, screen } from "@testing-library/react";
describe("test the header", () => {
  it("should render the website name and a navigation bar", () => {
    render(<Header />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("matchmake.ink")).toBeInTheDocument();
  });
});
