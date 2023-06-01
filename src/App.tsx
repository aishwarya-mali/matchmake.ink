import "./App.css";
import "./index.css";
import { useSession } from "./backend/session";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const session = useSession();

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
