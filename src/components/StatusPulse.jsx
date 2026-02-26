export default function StatusPulse({ active }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-3 w-3 rounded-full ${
          active ? "bg-green-400 animate-pulse" : "bg-red-400"
        }`}
      />
      <span className="text-xs text-slate-400">
        {active ? "Monitoring Active" : "Stopped"}
      </span>
    </div>
  );
}
