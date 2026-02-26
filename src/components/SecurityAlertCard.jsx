export default function SecurityAlertCard({ count }) {
  return (
    <div
      className={`p-6 rounded-2xl border ${
        count > 0
          ? "border-red-500 bg-red-500/10"
          : "border-green-500 bg-green-500/10"
      }`}
    >
      <div className="text-sm text-slate-400">Security Alerts</div>
      <div className="text-4xl font-bold mt-2">{count}</div>
    </div>
  );
}
