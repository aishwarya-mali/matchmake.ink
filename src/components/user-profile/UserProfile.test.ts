import { describe, it } from "vitest";
import { UserProfileProps, UserProfile } from "./UserProfile";
import { render, screen } from "@testing-library/react";

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
    render();

    // check text
    expect(screen.getByText(dummyUser.discordTag)).toBeInTheDocument();
    expect(
      screen.getByText(dummyUser.friendCode as string)
    ).toBeInTheDocument();
    expect(screen.getByText(dummyUser.team)).toBeInTheDocument();
  });
});
