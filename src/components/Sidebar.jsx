import { NavLink } from "react-router-dom";
import { Activity, Shield, Lock, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0f1320] border-r border-white/5 p-6">
      <h1 className="text-xl font-bold mb-8">🔐 Encryption Proxy</h1>

      <Nav icon={<Activity />} to="/" label="Dashboard" />
      <Nav icon={<Shield />} to="/traffic" label="Traffic" />
      <Nav icon={<Lock />} to="/security" label="Security" />
      <Nav icon={<Settings />} to="/settings" label="Settings" />
    </aside>
  );
}

function Nav({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${
          isActive
            ? "bg-purple-500/20 text-purple-300"
            : "hover:bg-white/5 text-slate-300"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}
