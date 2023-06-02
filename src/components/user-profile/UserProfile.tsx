import { FaTwitter } from "react-icons/fa";

export interface UserProfileProps {
  discordTag: string;
  profilePictureUrl: string;
  friendCode?: string;
  team: string;
  twitterHandle?: string;
  sendouPage?: string;
  // note - the sendouLink variable only refers to the last
}

export function UserProfile({
  discordTag,
  profilePictureUrl,
  friendCode = "",
  team = "Free Agent",
  twitterHandle = "",
  sendouPage = "",
}: UserProfileProps) {
  return (
    <div className="flex flex-col">
      <img role="profile-picture" src={profilePictureUrl} />
      <h1 className="font-bold text-3xl underline">{discordTag}</h1>
      <h2>{team}</h2>
      <p>{friendCode}</p>
      <div>
        <a role="twitter-handle" href={`https://twitter.com/${twitterHandle}`}>
          <FaTwitter />
        </a>
        <a role="sendou-page" href={`https://sendou.ink/u/${sendouPage}`}>
          Sendou.ink
        </a>
      </div>
    </div>
  );
}
