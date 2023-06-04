import { render, screen } from "@testing-library/react";
import { CreateTeam } from "./CreateTeam";

describe("CreateTeam page", () => {
  it("renders a form with a name input, discord id input, and discord invite link input ", () => {
    render(<CreateTeam />);
    expect(screen.getByLabelText(/Team Tag/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Discord Server ID/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Discord Server Invite/i)).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(<CreateTeam />);
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});
