import { useEffect, useState } from "react";
import { databaseClient } from "../backend/client";
import { Session, User } from "@supabase/supabase-js";
import axios from "axios";

export interface DashboardProps {
  session: Session;
}
export default function Dashboard({ session }: DashboardProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [friendCode, setFriendCode] = useState<string | null>(null);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);

      const { user } = session;
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
    provider_token: string | null | undefined,
    user: User
  ): Promise<string | void> {
    if (
      session.provider_token === null ||
      session.provider_token === undefined
    ) {
      return Promise.reject("No provider token");
    }

    const { data } = await axios.get("https://discordapp.com/api/users/@me", {
      headers: { Authorization: `Bearer ${provider_token}` },
    });
    const { id, username, discriminator, avatar, email } = data;

    // at some point this should be refactored
    databaseClient.from("profiles").upsert({
      updated_at: new Date(),
      id: user.id,
      discord_id: id,
      discord_tag: `${username}#${discriminator}`,
      avatar_url: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
      email: email,
    });

    return Promise.resolve();
  }

  async function updateProfile(event: React.FormEvent) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,
      friend_code: friendCode,
      updated_at: new Date(),
    };

    const { error } = await databaseClient.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    }

    await updateDiscordUserData(session.provider_token, user);
    setLoading(false);
  }

  return (
    <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="username">Friend Code</label>
        <input
          id="friendCode"
          type="text"
          required
          value={friendCode || ""}
          onChange={(e) => setFriendCode(e.target.value)}
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
