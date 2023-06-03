import { useSession } from "../backend/session";
import { useCurrentProfile } from "../backend/profile";
import { UserProfile } from "../components/user-profile/UserProfile";

export default function Home() {
  const session = useSession();
  const [profile] = useCurrentProfile(session);

  return (
    <main className="page">
      <UserProfile
        discordTag={profile?.discord_tag || ""}
        profilePictureUrl={profile?.avatar_url || ""}
        friendCode={profile?.friend_code || ""}
        team={profile?.team || ""}
        twitterHandle={profile?.twitter_handle || ""}
        sendouPage={profile?.sendou_page || ""}
      />
    </main>
  );
}
