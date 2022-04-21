const rangeModified = (start, end, step) => {
  const arr = [];
  let range = step;
  let counter = 0;
  if (range === undefined) {
    if (start - end > 0) {
      range = -1;
    } else {
      range = 1;
    }
  }
  for (let i = start; range > 0 ? i <= end : i >= end; ) {
    const ext = i + range;
    const isInRange = Math.abs(range) <= Math.abs(start - end);
    if (!isInRange) {
      throw new Error("Out of range");
    }
    if (counter > 0) {
      if (range < 0 && ext < end) {
        break;
      } else if (range > 0 && ext > end) {
        break;
      } else i = i + range;
    }
    arr[counter] = i;
    counter++;
  }
  return arr;
};

console.log(rangeModified(5, 2, -1));

if (
  JSON.stringify(rangeModified(5, 10, 1)) ===
  JSON.stringify([5, 6, 7, 8, 9, 10])
) {
  console.log("Test 1 Completed");
} else throw new Error("Somthing went wrong (1)");

module.exports = rangeModified;
