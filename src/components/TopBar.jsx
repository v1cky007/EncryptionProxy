import WSStatus from "./WSStatus";

export default function TopBar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/5">
      <input
        placeholder="Search logs..."
        className="bg-white/5 px-4 py-2 rounded-lg text-sm"
      />
      <div className="flex items-center gap-4">
        <WSStatus connected />
        <span>Admin</span>
      </div>
    </header>
  );
}
