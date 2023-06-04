import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSession } from "./backend/session";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Team from "./pages/Team";

import { Header } from "./components/header/Header";

export default function App() {
  const session = useSession();
  return (
    <>
      <Header />
      {session ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
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
