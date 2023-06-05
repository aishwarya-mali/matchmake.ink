import { InvitedTeams } from "../components/invited-teams/InvitedTeams";
import { useCurrentProfile } from "../backend/profile";
import { useState } from "react";
import { CreateTeam } from "../components/create-team/CreateTeam";
import { useEnforceLogin } from "../backend/session";

export default function TeamJoin() {
  const [creatingTeam, setCreatingTeam] = useState(false);
  const [profile] = useCurrentProfile();
  useEnforceLogin();

  const createTeamButton = (
    <div className="m-2 flex flex-col justify-center align-middle">
      <button
        onClick={() => setCreatingTeam(true)}
        className="bg-blue-500 p-4 rounded-lg m-4 w-48 h-24 text-xl mx-auto text-center align-middle hover:bg-blue-400 transition-all"
      >
        Create Team
      </button>
    </div>
  );

  // note - team logo is a placeholder for now because it hasn't been implemented
  return (
    <div className="page flex-col flex justify-center align-center">
      {creatingTeam ? (
        <CreateTeam userId={profile?.id || null} />
      ) : (
        createTeamButton
      )}
      <InvitedTeams profile={profile} />
    </div>
  );
}
