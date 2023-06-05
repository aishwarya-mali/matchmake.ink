import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { databaseClient } from "./backend/client";
import { Session } from "@supabase/supabase-js";
import { useRef } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import TeamJoin from "./pages/TeamJoin";

import { Header } from "./components/header/Header";
import { useSession } from "./backend/session";
import { updateDiscordUserData, updateProfile } from "./backend/profile";

export default function App() {
  const session = useSession();
  const updatedDiscord = useRef(false);

  databaseClient.auth.onAuthStateChange(
    (event: string, newSession: Session | null) => {
      if (
        event == "SIGNED_IN" &&
        newSession !== null &&
        updatedDiscord.current === false
      ) {
        console.log("signed in!");
        updateProfile({
          id: newSession.user.id,
        }).then(() => {
          updateDiscordUserData(newSession, newSession.provider_token || null);
          updatedDiscord.current = true; // prevent issue where discord is updated 8 times for whatever reason
        });
      } else if (event == "SIGNED_OUT") {
        console.log("signed out!");
      }
    }
  );
  return (
    <>
      <Header />
      {session ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<TeamJoin />} />
            <Route path="/profile" element={<p>profile</p>} />
            <Route path="/settings" element={<p>settings</p>} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </>
  );
}
