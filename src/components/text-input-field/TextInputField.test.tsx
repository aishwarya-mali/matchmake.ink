import { TextInputField, TextInputFieldProps } from "./TextInputField";
import { fireEvent, render, screen } from "@testing-library/react";

const props: TextInputFieldProps = {
  label: "Test Label",
  onChange: (value: string) => {
    console.log(value);
    called = true;
  },
  id: "test-id",
  infoUrl: "https://www.google.com",
};
let called = false;

describe("TextInputField", () => {
  beforeEach(() => {
    render(<TextInputField {...props} />);
    called = false;
  });
  it("renders the label", () => {
    expect(screen.getByText(/Test Label/)).toBeInTheDocument();
  });
  it("renders the info icon", () => {
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.google.com"
    );
  });
  it("renders the input", () => {
    expect(screen.getByRole("text-input")).toHaveAttribute("id", "test-id");
  });
  it("calls onChange when the input is changed", () => {
    fireEvent.change(screen.getByLabelText("Test Label"), {
      target: {
        value: "text",
      },
    });
    expect(called).toBe(true);
  });
});
