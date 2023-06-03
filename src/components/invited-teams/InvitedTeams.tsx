import { Profile } from "../../backend/profile";
import { TeamInvite } from "./TeamInvite";

export interface InvitedTeamsProps {
  profile: Profile | null;
}

export function InvitedTeams({ profile }: InvitedTeamsProps) {
  // this component is intentionally left dumb. It is waiting on the team system to be implemented
  return (
    <div className="bg-slate-700 flex flex-col max-w-lg border-slate-100 rounded-lg border p-2">
      <h2 className="text-xl text-center m-2">Team Invites</h2>
      <div>
        <TeamInvite
          teamName="teamwithareally"
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
    </div>
  );
}
