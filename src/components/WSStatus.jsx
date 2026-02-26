import { useWS } from "../context/WSContext";

export default function WSStatus() {
  const { connected } = useWS();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span
        className={`h-2 w-2 rounded-full ${
          connected ? "bg-green-400" : "bg-red-400"
        }`}
      />
      {connected ? "Live" : "Offline"}
    </div>
  );
}
