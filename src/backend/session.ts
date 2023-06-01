import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { databaseClient } from "./client";

export function useSession(): Session | null {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    databaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    databaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session;
}
