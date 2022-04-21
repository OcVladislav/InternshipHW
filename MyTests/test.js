const reverse = (arr) => {
  let result = [];
  for (let i = arr.length - 1, j = 0; i >= 0, j < arr.length; i--, j++) {
    result[j] = arr[i];
  }
  return result;
};

console.log(reverse(["A", "B", "C"]));