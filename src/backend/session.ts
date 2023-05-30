import { databaseClient } from "./client";
import { useState } from "react";
import { Session } from "@supabase/supabase-js";

// helper functions for getting the session and user objects.
export function useSession(): Session | null {
  const [session, setSession] = useState<Session | null>(null);

  databaseClient.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
  });

  const {
    data: { subscription },
  } = databaseClient.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return session;
}
