import { useState } from "react";
import { databaseClient } from "../../backend/client";

export function CreateTeam() {
  const [teamTag, setTeamTag] = useState("");
  const [discordServerId, setDiscordServerId] = useState("");
  const [discordServerInvite, setDiscordServerInvite] = useState("");

  return (
    <form>
      <label htmlFor="team-tag">Team Tag</label>
      <input
        onChange={(e) => setTeamTag(e.target.value)}
        id="team-tag"
        type="text"
      />
      <label htmlFor="discord-server-id">Discord Server ID</label>
      <input
        onChange={(e) => setDiscordServerId(e.target.value)}
        id="discord-server-id"
        type="text"
      />
      <label htmlFor="discord-server-invite">Discord Server Invite</label>
      <input
        onChange={(e) => setDiscordServerInvite(e.target.value)}
        id="discord-server-invite"
        type="text"
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          databaseClient
            .from("teams")
            .insert([
              {
                team_tag: teamTag,
                discord_server_id: discordServerId,
                discord_server_invite: discordServerInvite,
              },
            ])
            .then(
              (data) => {
                console.log("form was submitted");
                console.log(data);
              },
              (error) => {
                console.log("form was not submitted");
                console.log(error);
              }
            );
        }}
      >
        Submit
      </button>
    </form>
  );
}
