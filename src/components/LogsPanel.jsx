{logs.map((log, i) => {
  let color = "text-slate-300";

  if (log.level === "error") color = "text-red-400";
  if (log.level === "modbus") color = "text-purple-400";
  if (log.level === "system") color = "text-blue-400";

  return (
    <div key={i} className={`text-xs mb-2 ${color}`}>
      {log.message}
    </div>
  );
})}
