import { InvitedTeams } from "../components/invited-teams/InvitedTeams";
import { useSession } from "../backend/session";
import { useCurrentProfile } from "../backend/profile";

export default function Team() {
  const session = useSession();
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

  const noTeamScreen = (
    <div className="page flex-col flex justify-around align-center">
      <div className="m-2 flex flex-col justify-center align-middle">
        <button className="bg-green-500 p-4 rounded-lg m-4 w-48 h-24 text-xl mx-auto text-center align-middle hover:bg-green-400 transition-all">
          Create Team
        </button>
      </div>
      <InvitedTeams profile={profile} />
    </div>
  );

  const hasTeamScreen = <h1>I have a team!</h1>;

  // note - team logo is a placeholder for now because it hasn't been implemented
  return (
    <div className="page flex-row flex justify-around">
      {profile.team ? hasTeamScreen : noTeamScreen}
    </div>
  );
}
