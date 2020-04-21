export function getMax(data, field) {
  let max = 0;
  data.forEach((d) => {
    if (d[field] > max) max = d[field];
  });
  return max;
}
