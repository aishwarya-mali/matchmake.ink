import { Session } from "@supabase/supabase-js";
import { databaseClient } from "./client";
import axios from "axios";
import { useEffect, useState } from "react";
import { SessionSingleton } from "./session";

export interface Profile {
  id: string;
  discord_id: string | null;
  discord_tag: string | null;
  avatar_url: string | null;
  email: string | null;
  friend_code: string;
  twitter_handle: string;
  sendou_page: string;
  invited_teams: string[] | null;
  team: string;
}

export interface ProfileUpdate {
  id: string;
  friend_code?: string;
  twitter_handle?: string;
  sendou_page?: string;
  team?: string;
}

// for all of these functions, it is the caller's responsibility to make sure that the session exists

// updaing the User's profile requires two functions:
// updateProfile, which updates all of the user submitted values which are described in the ProfileUpdate interface
// updateDiscordUserData, which updates all of the stuff the user gets from discord. It should be called when the user logs in.

// if anything in ProfileUpdate is an empty string, it will be ignored
export async function updateProfile(
  inputs: ProfileUpdate
): Promise<string | void> {
  const { error } = await databaseClient.from("profiles").upsert(inputs);

  if (error) {
    return Promise.reject(`Error updating profile: ${error.message}`);
  }
  return Promise.resolve();
}

export async function updateDiscordUserData(
  session: Session,
  providerToken: string | null
): Promise<string | void> {
  // ensure arguments
  if (session === null) return Promise.reject("Session is null");

  if (session.provider_token === null || session.provider_token === undefined) {
    return Promise.reject("No provider token");
  }

  await axios
    .get("https://discordapp.com/api/users/@me", {
      headers: { Authorization: `Bearer ${providerToken}` },
    })
    .then((res) => {
      const updates = {
        id: session.user.id,
        discord_id: res.data.id,
        discord_tag: `${res.data.username}#${res.data.discriminator}`,
        avatar_url: `https://cdn.discordapp.com/avatars/${res.data.id}/${res.data.avatar}.png`,
        email: res.data.email,
      };

      databaseClient
        .from("profiles")
        .upsert(updates)
        .then((response) => {
          console.log(response);
        }); // do we need error handling here?
      return Promise.resolve();
    })
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });

  return Promise.resolve();
}

// gets the currnt user's profile
export function useCurrentProfile(): [Profile | null, boolean] {
  const instance = SessionSingleton.getInstance();
  const session = instance.getSession();
  const sessionFound = instance.isSessionFound();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProfile = async () => {
      // if the session hasn't been found yet, we should just return an empty profile to display while we wait.
      if (!sessionFound)
        return Promise.resolve({
          id: "",
          discord_id: "",
          discord_tag: "",
          avatar_url: "",
          email: "",
          friend_code: "",
          twitter_handle: "",
          sendou_page: "",
          invited_teams: [],
          team: "",
        });

      // if the session is null, then the user isn't logged in and we have an issue
      if (session === null)
        return Promise.reject("Session is null. Are you logged in?");

      const { data, error } = await databaseClient
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        return Promise.reject(`Error fetching profile: ${error.message}`);
      }

      if (data as Profile) {
        return Promise.resolve(data as Profile);
      }
      return Promise.reject(`${data} could not be casted to Profile`);
    };

    getProfile()
      .then((res) => {
        setProfile(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [session, sessionFound]);

  return [profile, loading];
}
