import { NavItem, NavItemProps } from "./NavItem";
import { render } from "@testing-library/react";

describe("test the nav item", () => {
  it("renders all properties", () => {
    const props: NavItemProps = {
      icon: <div>icon</div>,
      link: "https://example.com",
    };

    render(<NavItem {...props} />);

    expect(document.querySelector("a")).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(document.querySelector("a")).toHaveTextContent("icon");
  });
});
