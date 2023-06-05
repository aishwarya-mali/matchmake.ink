import { Profile } from "../../backend/profile";
import { TeamInvite } from "./TeamInvite";

export interface InvitedTeamsProps {
  profile: Profile | null;
}

// primarily a placeholder component for now. Will be implemented properly and tested when team invites are implemented
export function InvitedTeams({ profile }: InvitedTeamsProps) {
  console.log(profile);
  return (
    <div className="bg-background-light flex flex-col w-fit border-red-100 rounded-lg border p-2 m-auto">
      <h2 className="text-xl text-center m-2">Join Team</h2>
      <div>
        <TeamInvite
          teamName="team with a really long name for some reason"
          teamLogoUrl="https://via.placeholder.com/150"
          joinCallback={() => {
            console.log("team joined");
          }}
          declineCallback={() => {
            console.log("team declined");
          }}
        />
        <TeamInvite
          teamName="Team 2"
          teamLogoUrl="https://via.placeholder.com/150"
          joinCallback={() => {
            console.log("team joined");
          }}
          declineCallback={() => {
            console.log("team declined");
          }}
        />
        <TeamInvite
          teamName="Team 3"
          teamLogoUrl="https://via.placeholder.com/150"
          joinCallback={() => {
            console.log("team joined");
          }}
          declineCallback={() => {
            console.log("team declined");
          }}
        />
      </div>
      <p className="text-center">Nothing here? Ask someone for an invite!</p>
    </div>
  );
}
