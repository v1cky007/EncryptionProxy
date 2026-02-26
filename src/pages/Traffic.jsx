import MainLayout from "../layouts/MainLayout";
import { useWS } from "../context/WSContext";

export default function Traffic() {
  const { logs } = useWS();

  return (
    <MainLayout>
      <div className="bg-white/5 rounded-2xl p-6 h-96 overflow-auto">
        <h3 className="mb-4 font-semibold">Live Traffic Logs</h3>

        {logs.map((l, i) => (
          <div key={i} className="text-xs mb-1">
            <span className="text-slate-500">
              [{l.level?.toUpperCase()}]
            </span>{" "}
            <span className="text-slate-300">{l.message}</span>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
