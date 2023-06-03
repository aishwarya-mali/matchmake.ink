import { FaHome, FaUser } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { useSession } from "../../backend/session";
import { NavItem } from "./NavItem";

export function Header() {
  const session = useSession();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-800">
      <h1>matchmake.ink</h1>
      <nav
        role="navigation"
        className="flex items-center justify-between flex-1"
      >
        <NavItem link="/" icon={<FaHome />} />
        <NavItem link="/team" icon={<MdGroups />} />
        <NavItem link="/profile" icon={<FaUser />} />
        <NavItem link="/settings" icon={<BsGearFill />} />
      </nav>
      <button className="">{session ? "Sign In" : "Sign Out"}</button>
    </header>
  );
}
