export interface NavItemProps {
  icon: React.ReactNode;
  link: string;
}

export function NavItem({ icon, link }: NavItemProps) {
  return (
    <div>
      <a href={link}>{icon}</a>
    </div>
  );
}
