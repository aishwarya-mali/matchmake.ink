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
      <h2>{team}</h2>
      <p>{friendCode}</p>

      <img role="profile-picture" src={profilePictureUrl} />

      <div>
        <a role="twitter-link" href={`https://twitter.com/${twitterHandle}`}>
          Twitter
        </a>
        <a role="sendou-link" href={`https://sendou.ink/u/${sendouLink}`}>
          Sendou.ink
        </a>
      </div>
    </div>
  );
}
