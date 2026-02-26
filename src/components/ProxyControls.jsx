import axios from "axios";
import { useWS } from "../context/WSContext";
import { useState } from "react";

export default function ProxyControls() {
  const { proxyRunning } = useWS();
  const [loading, setLoading] = useState(false);

  const start = async () => {
    setLoading(true);
    await axios.post("http://127.0.0.1:8000/proxy/start");
    setLoading(false);
  };

  const stop = async () => {
    setLoading(true);
    await axios.post("http://127.0.0.1:8000/proxy/stop");
    setLoading(false);
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={start}
        disabled={loading || proxyRunning}
        className="bg-green-600 px-6 py-2 rounded-lg disabled:opacity-40"
      >
        ▶ Start Proxy
      </button>

      <button
        onClick={stop}
        disabled={loading || !proxyRunning}
        className="bg-red-600 px-6 py-2 rounded-lg disabled:opacity-40"
      >
        ■ Stop Proxy
      </button>

      <span className="text-sm text-slate-400">
        Status: {proxyRunning ? "RUNNING" : "STOPPED"}
      </span>
    </div>
  );
}
