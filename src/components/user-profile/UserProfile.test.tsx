import { describe, it, expect } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import { UserProfile, UserProfileProps } from "./UserProfile";
import { render, screen } from "@testing-library/react";

expect.extend(matchers);
const dummyUser: UserProfileProps = {
  discordTag: "AwesomeUser#1234",
  profilePictureUrl:
    "https://cdn.discordapp.com/avatars/1234567890/1234567890.png",
  friendCode: "SW-1234-5678-9012",
  team: "Cephalogods",
  sendouLink: "fire",
  twitterHandle: "matchmake_ink",
};

describe("test UserProfile", () => {
  it("should render all properties", () => {
    render(<UserProfile {...dummyUser} />);

    // check all text is there
    expect(screen.getByText(dummyUser.discordTag)).toBeInTheDocument();
    expect(
      screen.getByText(dummyUser.friendCode as string)
    ).toBeInTheDocument();
    expect(screen.getByText(dummyUser.team)).toBeInTheDocument();

    // check all links are there
    expect(screen.getByRole("twitter-link")).toHaveAttribute(
      "href",
      "https://twitter.com/matchmake_ink"
    );
    expect(screen.getByRole("sendou-link")).toHaveAttribute(
      "href",
      "https://sendou.ink/u/fire"
    );
    expect(screen.getByRole("profile-picture")).toHaveAttribute(
      "src",
      "https://cdn.discordapp.com/avatars/1234567890/1234567890.png"
    );
  });
});
