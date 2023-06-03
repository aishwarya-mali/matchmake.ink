import { InvitedTeams } from "../components/invited-teams/InvitedTeams";
import { useSession } from "../backend/session";
import { useCurrentProfile } from "../backend/profile";

export default function Team() {
  const session = useSession();
  const [profile] = useCurrentProfile(session);

  return (
    <div className="page">
      <InvitedTeams profile={profile} />
    </div>
  );
}
