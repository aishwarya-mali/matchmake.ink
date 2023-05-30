import "./App.css";
import "./index.css";

import { useEffect } from "react";
import { useSession } from "./backend/session";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const session = useSession();

  useEffect(() => {
    if (!session) {
      redirect("/login");
    }
  }, [session]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
