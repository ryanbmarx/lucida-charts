export function format(val) {
  if (val / 1000000000 > 1) {
    // Billions
    return `\$${Math.round(val / 100000000) / 10}B`;
  } else if (val / 1000000 > 1) {
    // Millions
    return `\$${Math.round(val / 100000) / 10}M`;
  }
  // Thousands
  return `\$${Math.round(val / 100) / 10}K`;
}
