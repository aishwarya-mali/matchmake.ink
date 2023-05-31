import { databaseClient } from "../backend/client";
import { useSession } from "../backend/session";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

export default function Dashboard() {
  const session = useSession();
  useEffect(() => {
    console.log(session);
    if (session === null) {
      redirect("/login");
    }
  }, [session]);

  const onLogOutClicked = () => {
    databaseClient.auth.signOut();
  };

  return (
    <div>
      <h1>You are logged in!</h1>
      <button onClick={onLogOutClicked}>Log Out</button>
    </div>
  );
}
