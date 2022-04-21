// 1
const min = (x, y) => (x > y ? y : x);

console.log(min(3, -10));

if (min(-2, 5) === -2) {
  console.log("Test 1 Completed");
} else throw new Error("Somthing went wrong (1)");

// 2

const Min = (arr) => {
  let minElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < minElement && (minElement = arr[i]);
  }
  return minElement;
};

console.log(Min([2, 4, -4, 10, 0, -9, 17]));

if (Min([2, 4, -4, 10, 0, -9, 17]) === -9) {
  console.log("Test 2 Completed");
} else throw new Error("Somthing went wrong (2)");
