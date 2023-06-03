import { FaHome, FaUser } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { useSession } from "../../backend/session";

export function Header() {
  const session = useSession();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-800">
      <nav className="flex items-center justify-between flex-1"></nav>
      <button className="">{session ? "Sign In" : "Sign Out"}</button>
    </header>
  );
}
