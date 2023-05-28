import "./App.css";
import { useState, useEffect } from "react";
import { databaseClient } from "./backend/client";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    databaseClient.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session));
    databaseClient.auth.onAuthStateChange((_event, session) =>
      setSession(session)
    );
  }, []);

  return (
    <div className="container">
      {!session ? <Auth /> : <Account session={session} />}
    </div>
  );
}

export default App;
