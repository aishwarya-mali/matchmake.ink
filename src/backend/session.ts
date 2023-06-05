import { useEffect, useState } from "react";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { databaseClient } from "./client";

export function useSession(): Session | null {
  const [session, setSession] = useState<Session | null>(null);
  const sessionSingleton = SessionSingleton.getInstance();
  // maybe later think of a way for session to be null safe? I'm don't know how to do that. If you do, please fix it.

  useEffect(() => {
    setSession(sessionSingleton.getSession());
    sessionSingleton.addSessionListener((_event, session) => {
      setSession(session);
    });
  }, [sessionSingleton]);

  return session;
}

export class SessionSingleton {
  private static instance: SessionSingleton;
  //Assign "new Singleton()" here to avoid lazy initialisation

  constructor() {
    if (SessionSingleton.instance) {
      throw new Error("Error - use Singleton.getInstance()");
    }

    databaseClient.auth.getSession().then(({ data: { session } }) => {
      this.currentSession = session;
    });
    databaseClient.auth.onAuthStateChange((event: AuthChangeEvent, session) => {
      this.currentSession = session;
      this.sessionListeners.forEach((listener) => listener(event, session));
    });
  }

  static getInstance(): SessionSingleton {
    SessionSingleton.instance =
      SessionSingleton.instance || new SessionSingleton();
    return SessionSingleton.instance;
  }

  public getSession(): Session | null {
    return this.currentSession;
  }

  public addSessionListener(
    listener: (event: AuthChangeEvent, session: Session | null) => void
  ): void {
    this.sessionListeners.push(listener);
  }

  private currentSession: Session | null = null;
  private sessionListeners: ((
    event: AuthChangeEvent,
    session: Session | null
  ) => void)[] = [];
}
