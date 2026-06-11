import { NavLink } from "react-router";

const drills = [
  { to: "/drills/foundations-of-fury", label: "Foundations of Fury" },
  { to: "/drills/technical-arsenal", label: "Technical Arsenal" },
];

const theory = [
  { to: "/theory/building-blocks", label: "Building Blocks" },
];

function NavGroup({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  return (
    <div className="navbar-group">
      <span className="navbar-group-label">{label}</span>
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => `navbar-link${isActive ? " navbar-link--active" : ""}`}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          FretForge
        </NavLink>
        <div className="navbar-links">
          <NavGroup label="Drills" items={drills} />
          <NavGroup label="Theory" items={theory} />
        </div>
      </nav>
    </header>
  );
}
