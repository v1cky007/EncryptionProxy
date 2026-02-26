export default function UptimeCard({ uptime = "00:00:00" }) {
  return (
    <div className="bg-green-700 text-white rounded-2xl p-6 flex flex-col items-center">
      <p>Proxy Uptime</p>
      <h2 className="text-3xl font-bold mt-2">{uptime}</h2>
    </div>
  );
}
