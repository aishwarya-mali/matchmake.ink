import "./index.css";
import { useSession } from "./backend/session";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  const session = useSession();

  return (
    <div className="app bg-slate-900" style={{ padding: "50px 0 100px 0" }}>
      {!session ? <Login /> : <Home />}
    </div>
  );
}
