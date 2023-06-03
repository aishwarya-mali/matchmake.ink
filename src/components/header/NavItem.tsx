export interface NavItemProps {
  icon: React.ReactNode;
  link: string;
}

export function NavItem({ icon, link }: NavItemProps) {
  return (
    <a href={link} className="nav-link">
      {icon}
    </a>
  );
}
