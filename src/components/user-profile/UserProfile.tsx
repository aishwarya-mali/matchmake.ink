export interface UserProfileProps {
  discordTag: string;
  profilePictureUrl: string;
  friendCode?: string;
  team: string;
  twitterHandle?: string;
  sendouLink?: string;
  // note - the sendouLink variable only refers to the last
}

export function UserProfile({
  discordTag,
  profilePictureUrl,
  friendCode = "",
  team = "Free Agent",
  twitterHandle = "",
  sendouLink = "",
}: UserProfileProps) {
  return (
    <div>
      <h1>{discordTag}</h1>
    </div>
  );
}
