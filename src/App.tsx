import "./index.css";
import { useSession } from "./backend/session";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  const session = useSession();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<p>team</p>} />
          <Route path="/profile" element={<p>profile</p>} />
          <Route path="/settings" element={<p>settings</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
