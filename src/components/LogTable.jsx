import { useWS } from "../context/WSContext";

export default function LogTable() {
  const { logs } = useWS();

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="font-semibold mb-2">Live Logs</h2>
      <div className="h-64 overflow-auto text-sm font-mono">
        {logs.map((l, i) => (
          <div key={i}>{l.message}</div>
        ))}
      </div>
    </div>
  );
}
