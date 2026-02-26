export default function StatusBar({ connected, running }) {
  return (
    <div className="flex gap-6 p-4 bg-slate-800 rounded-xl mb-6 text-sm">
      <span className={running ? "text-green-400" : "text-red-400"}>
        Proxy Status: {running ? "Running" : "Stopped"}
      </span>

      <span className={connected ? "text-green-400" : "text-red-400"}>
        WebSocket: {connected ? "Connected" : "Disconnected"}
      </span>

      <span className="text-slate-300">
        Secure Tunnel: Active
      </span>

      <span className="text-slate-300">
        Rekeying: Enabled
      </span>

      <span className="text-slate-300">
        Replay Protection: Enabled
      </span>
    </div>
  );
}
