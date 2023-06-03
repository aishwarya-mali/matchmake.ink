import { FaHome, FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { useSession } from "../../backend/session";
import { NavItem } from "./NavItem";

export function Header() {
  const session = useSession();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 className="text-bold text-2xl m-2 text-white">matchmake.ink</h1>
      <nav
        role="navigation"
        className="flex items-center justify-between flex-1"
      >
        <NavItem link="/" icon={<FaHome />} />
        <NavItem link="/team" icon={<MdGroups />} />
        <NavItem link="/profile" icon={<FaUser />} />
        <NavItem link="/settings" icon={<BsGearFill />} />
      </nav>
      <span className="w-full"></span>
      <button className="nav-link">
        {session ? <FaSignOutAlt /> : <FaSignInAlt />}
      </button>
    </header>
  );
}