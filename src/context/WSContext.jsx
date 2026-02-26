import { createContext, useContext, useEffect, useState } from "react";

const WSContext = createContext();

export function WSProvider({ children }) {
  const [connected, setConnected] = useState(false);
  const [logs, setLogs] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [stats, setStats] = useState({});
  const [proxyRunning, setProxyRunning] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws");

    ws.onopen = () => setConnected(true);
    ws.onclose = () => setConnected(false);

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);

      if (data.type === "log") {
        setLogs((prev) => [data, ...prev].slice(0, 200));
      }

      if (data.type === "alert") {
        setAlerts((prev) => [data, ...prev].slice(0, 100));
      }

      if (data.type === "stats") {
        setStats(data.payload);
      }

      if (data.type === "proxy_status") {
        setProxyRunning(data.running);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <WSContext.Provider
      value={{ connected, logs, alerts, stats, proxyRunning }}
    >
      {children}
    </WSContext.Provider>
  );
}

export const useWS = () => useContext(WSContext);
