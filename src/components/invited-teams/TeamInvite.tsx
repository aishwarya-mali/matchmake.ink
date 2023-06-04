export interface TeamInviteProps {
  teamName: string;
  teamLogoUrl: string;
  joinCallback: () => void;
  declineCallback: () => void;
}

export function TeamInvite({
  teamName,
  teamLogoUrl,
  joinCallback,
  declineCallback,
}: TeamInviteProps) {
  if (teamName.length > 10) {
    teamName = teamName.substring(0, 15) + "...";
  }

  return (
    <div className="bg-slate-800 flex flex-row max-w-lg border-slate-100 rounded-lg border m-2 p-2">
      <img
        src={teamLogoUrl}
        alt="Team Logo"
        className="w-16 h-16 rounded-full m-2"
      />
      <p className="inline-block m-2 my-auto text-md underline">{teamName}</p>
      <span className="flex-grow"></span>
      <button
        className="bg-green-500 p-2 m-2 rounded-lg hover:bg-green-400 w-20 transition-all"
        onClick={joinCallback}
      >
        Join
      </button>
      <button
        className="bg-red-500 p-2 m-2 rounded-lg hover:bg-red-400 w-20 transition-all"
        onClick={declineCallback}
      >
        Decline
      </button>
    </div>
  );
}
