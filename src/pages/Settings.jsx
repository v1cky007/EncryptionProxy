import MainLayout from "../layouts/MainLayout";

export default function Settings() {
  return (
    <MainLayout>
      <h1 className="text-xl font-semibold mb-6">Settings</h1>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Proxy Mode
          </label>
          <select className="bg-slate-800 px-3 py-2 rounded w-64">
            <option>Monitoring</option>
            <option>Blocking</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Encryption Algorithm
          </label>
          <select className="bg-slate-800 px-3 py-2 rounded w-64">
            <option>AES-256</option>
            <option>ChaCha20</option>
          </select>
        </div>

        <button className="bg-purple-600 px-6 py-2 rounded-lg">
          Save Settings
        </button>
      </div>
    </MainLayout>
  );
}
