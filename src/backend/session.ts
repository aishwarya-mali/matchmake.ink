import { useEffect, useState } from "react";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { databaseClient } from "./client";
import { updateDiscordUserData, updateProfile } from "./profile";
import { useNavigate } from "react-router-dom";

export function useSession(): Session | null {
  const [session, setSession] = useState<Session | null>(null);
  const sessionSingleton = SessionSingleton.getInstance();

  useEffect(() => {
    setSession(sessionSingleton.getSession());
    sessionSingleton.addSessionListener((_event, session) => {
      setSession(session);
    });
  }, [sessionSingleton]);

  return session;
}

export function useSessionFound(): boolean {
  const sessionSingleton = SessionSingleton.getInstance();
  const [sessionFound, setSessionFound] = useState<boolean>(false);
  useEffect(() => {
    setSessionFound(sessionSingleton.isSessionFound());
  }, [sessionSingleton]);

  return sessionFound;
}

// DO NOT CALL THIS hook OUTSIDE OF THE ROUTER!! It will cause an error
enum SESSION_STATUS {
  LOADING,
  LOGGED_IN,
  LOGGED_OUT,
}
export function useEnforceLogin(): SESSION_STATUS {
  const navigate = useNavigate();
  const session = useSession();
  const sessionFound = useSessionFound();
  const [status, setStatus] = useState<SESSION_STATUS>(SESSION_STATUS.LOADING);

  useEffect(() => {
    if (sessionFound) {
      setStatus(SESSION_STATUS.LOGGED_IN);

      if (session === null) {
        setStatus(SESSION_STATUS.LOGGED_OUT);
        navigate("/login");

        console.log("user is not logged in. Redirecting to login page...");
      }
    }
  }, [session, navigate, sessionFound]);

  return status;
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
      this.sessionFound = true;
    });
    databaseClient.auth.onAuthStateChange((event: AuthChangeEvent, session) => {
      if (event == "SIGNED_IN" && session !== null) {
        console.log("signed in!");
        updateProfile({
          id: session.user.id,
        }).then(() => {
          updateDiscordUserData(session, session.provider_token || null);
        });
      }

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

  public isSessionFound(): boolean {
    return this.sessionFound;
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
  private sessionFound = false;
}
