export default function LogFilters({
  filter,
  setFilter,
  search,
  setSearch
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-4 items-center">
      {/* Filter Buttons */}
      <div className="flex gap-2">
        {["all", "error", "modbus", "system"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded text-sm font-semibold ${
              filter === f
                ? "bg-cyan-600"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search logs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-slate-800 px-3 py-1 rounded border border-slate-600 text-sm outline-none"
      />
    </div>
  );
}
