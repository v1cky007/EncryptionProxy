import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export default function TrafficChart({ data }) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-64">
      <p className="text-sm text-slate-400 mb-2">
        Encrypted Packet Throughput (Zero-Trust Tunnel)
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <Tooltip />
          <Line
            dataKey="value"
            stroke="#22d3ee"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
