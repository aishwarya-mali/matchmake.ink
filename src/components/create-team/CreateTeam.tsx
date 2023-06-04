export function CreateTeam() {
  return (
    <form>
      <label htmlFor="team-tag">Team Tag</label>
      <input id="team-tag" type="text" />
      <label htmlFor="discord-server-id">Discord Server ID</label>
      <input id="discord-server-id" type="text" />
      <label htmlFor="discord-server-invite">Discord Server Invite</label>
      <input id="discord-server-invite" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
