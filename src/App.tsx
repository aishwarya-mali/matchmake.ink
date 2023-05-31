import "./App.css";
import "./index.css";
import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { databaseClient } from "./backend/client";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    databaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    databaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Login />
      ) : (
        <Dashboard key={session.user.id} session={session} />
      )}
    </div>
  );
}
