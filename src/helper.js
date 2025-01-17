export const convertToCSV = (objArray) => {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;

  // Get headers from the first object
  const headers = Object.keys(array[0]);

  // Add headers to CSV
  let csv = headers.map((header) => escapeCSVField(header)).join(",") + "\r\n";

  // Add data rows
  for (let i = 0; i < array.length; i++) {
    const row = headers.map((header) => {
      const field = array[i][header]?.toString() || "";
      return escapeCSVField(field);
    });
    csv += row.join(",") + "\r\n";
  }

  return csv;
};

// Helper function to properly escape CSV fields
const escapeCSVField = (field) => {
  if (field === null || field === undefined) {
    return '""';
  }

  // Convert to string and escape any quotes
  const escaped = field.toString().replace(/"/g, '""');

  // Wrap in quotes if the field contains commas, quotes, or whitespace
  if (
    escaped.includes(",") ||
    escaped.includes('"') ||
    escaped.includes(" ") ||
    escaped.includes("\n")
  ) {
    return `"${escaped}"`;
  }

  return escaped;
};

export const downloadCSV = (fileName, data) => {
  // Add BOM for proper UTF-8 encoding in Excel
  const BOM = "\uFEFF";
  const csvData = new Blob([BOM + convertToCSV(data)], {
    type: "text/csv;charset=utf-8",
  });

  const csvURL = URL.createObjectURL(csvData);
  const link = document.createElement("a");
  link.href = csvURL;
  link.download = `${fileName}.csv`;

  // Clean up
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(csvURL);
};
