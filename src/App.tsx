import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  // flow should look like this:
  // is the user logged in>
  //   if yes:
  //     is this the first time they've logged in?
  //       if yes:
  //         create a new user in the database
  //       show user dashboard
  //   if no:
  //     show login page

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
