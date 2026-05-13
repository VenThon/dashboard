export function downloadCSV<T extends Record<string, unknown>>(
  data: T[],
  filename = "data.csv",
) {
  if (!data.length) return;

  const headers = Object.keys(data[0]).join(",");
  const rows = data.map((row) => Object.values(row).map(String).join(","));

  const csvContent = [headers, ...rows].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  URL.revokeObjectURL(url);
}
