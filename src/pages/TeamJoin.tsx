import { InvitedTeams } from "../components/invited-teams/InvitedTeams";
import { useSession } from "../backend/session";
import { useCurrentProfile } from "../backend/profile";
import { useState } from "react";
import { CreateTeam } from "../components/create-team/CreateTeam";

export default function TeamJoin() {
  const session = useSession();
  const [creatingTeam, setCreatingTeam] = useState(false);
  const [profile] = useCurrentProfile(session);

  if (profile == null) {
    return (
      <div className="page">
        <p>
          Wait... You shouldn't be here! Please <a href="/login">log in</a>.
        </p>
      </div>
    );
  }

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
      {creatingTeam ? <CreateTeam userId={profile.id} /> : createTeamButton}
      <InvitedTeams profile={profile} />
    </div>
  );
}
