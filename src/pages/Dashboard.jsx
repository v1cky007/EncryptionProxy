import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/StatCard";
import StatusBar from "../components/StatusBar";
import { useWS } from "../context/WSContext";

export default function Dashboard() {
  const { stats, connected, proxyRunning } = useWS();

  return (
    <MainLayout>
      <StatusBar connected={connected} running={proxyRunning} />

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Total Packets"
          value={stats.total_packets || 0}
          sub="All traffic"
        />
        <StatCard
          title="Modbus Packets"
          value={stats.modbus_packets || 0}
          sub="Industrial protocol"
        />
        <StatCard
          title="Errors"
          value={stats.errors || 0}
          sub="Security / system"
        />
        <StatCard
          title="Avg Latency (ms)"
          value={stats.avg_latency || 0}
          sub="Proxy delay"
        />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-slate-400 mt-6">
        This dashboard monitors a zero-trust encryption proxy that secures
        legacy TCP/Modbus communication using ECDH key exchange, AES-GCM
        encryption, replay protection, and periodic key rotation.
      </div>
    </MainLayout>
  );
}
