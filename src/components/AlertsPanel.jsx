function severityColor(sev) {
  if (sev === "CRITICAL") return "text-red-500";
  if (sev === "HIGH") return "text-orange-400";
  return "text-yellow-400";
}

export default function AlertsPanel({ logs }) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
      <h3 className="font-semibold mb-4">Security Alerts</h3>

      {logs.length === 0 && (
        <p className="text-slate-400">No alerts detected</p>
      )}

      {logs.map((a, i) => (
        <div
          key={i}
          className={`text-sm mb-2 ${severityColor(a.severity)}`}
        >
          [{a.category}] {a.message}
        </div>
      ))}
    </div>
  );
}
