import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import TeamJoin from "./pages/TeamJoin";

import { Header } from "./components/header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamJoin />} />
        <Route path="/profile" element={<p>profile</p>} />
        <Route path="/settings" element={<p>settings</p>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
