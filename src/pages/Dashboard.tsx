import { useEffect, useState } from "react";
import { databaseClient } from "../backend/client";
import { useSession } from "../backend/session";
import axios from "axios";
import { Session } from "@supabase/supabase-js";

export default function Dashboard() {
  const session = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [friendCode, setFriendCode] = useState<string | null>(null);
  const [twitter, setTwitter] = useState<string | null>(null);
  const [sendou, setSendou] = useState<string | null>(null);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);

      const { user } = session as Session;
      const { data, error } = await databaseClient
        .from("profiles")
        .select(`friend_code`)
        .eq("id", user.id)
        .single();

      if (error) {
        console.warn(error);
      } else if (data) {
        setFriendCode(data.friend_code);
      }

      setLoading(false);
    }

    getProfile();
  }, [session]);

  // this function updates the data on this user's discord tag and profile pictures. It's called once when the componenet is loaded
  async function updateDiscordUserData(
    provider_token: string | null | undefined
  ): Promise<string | any> {
    if (session) {
      if (
        session.provider_token === null ||
        session.provider_token === undefined
      ) {
        return Promise.reject("No provider token");
      }

      const { data } = await axios.get("https://discordapp.com/api/users/@me", {
        headers: { Authorization: `Bearer ${provider_token}` },
      });

      return Promise.resolve(data);
    }
    return Promise.reject("session is null");
  }

  async function updateProfile(event: React.FormEvent) {
    event.preventDefault();

    setLoading(true);

    if (session === null) {
      throw new Error("Session is null");
    }

    const { user } = session;
    const discordData = await updateDiscordUserData(session.provider_token);

    const updates = {
      id: user.id,
      friend_code: friendCode,
      sendou_page: sendou,
      twitter_handle: twitter,
      discord_id: discordData.id,
      discord_tag: `${discordData.username}#${discordData.discriminator}`,
      avatar_url: `https://cdn.discordapp.com/avatars/${discordData.id}/${discordData.avatar}.png`,
      email: discordData.email,
      updated_at: new Date(),
    };

    const { error } = await databaseClient.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    }

    await updateDiscordUserData(session.provider_token);
    setLoading(false);
  }

  return (
    <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="friendCode">Friend Code</label>
        <input
          id="friendCode"
          type="text"
          required
          value={friendCode || ""}
          onChange={(e) => setFriendCode(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="twitterHandle">Twitter handle</label>
        <input
          id="twitterHandle"
          type="text"
          required
          value={twitter || ""}
          onChange={(e) => setTwitter(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sendouPage">sendou.ink page</label>
        <input
          id="sendouPage"
          type="text"
          required
          value={sendou || ""}
          onChange={(e) => setSendou(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button block primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          type="button"
          onClick={() => databaseClient.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </form>
  );
}
