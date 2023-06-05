import { render, screen, fireEvent } from "@testing-library/react";
import { CreateTeam } from "./CreateTeam";

const props = {
  userId: "1234",
};

describe("CreateTeam page", () => {
  it("renders a form with a name input, discord id input, and discord invite link input ", () => {
    render(<CreateTeam {...props} />);
    expect(screen.getByLabelText(/Team Tag/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Discord Server ID/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Discord Server Invite/i)).toBeInTheDocument();
  });
  it("renders a submit button", () => {
    render(<CreateTeam {...props} />);
    expect(screen.getByRole("submit")).toBeInTheDocument();
  });
  it("submits the form to the backend", () => {
    render(<CreateTeam {...props} />);
    const input = screen.getByLabelText(/Team Tag/i);
    const submitButton = screen.getByRole("submit");

    fireEvent.change(input, { target: { value: "super-awesome-team" } });
    fireEvent.click(submitButton);
  });
});
