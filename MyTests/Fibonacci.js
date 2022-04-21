function f(n) {
  let arr = [];
  if (n === 0) {
    return arr;
  }
  let a = 1;
  let b = 1;
  arr.push(a, b);
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    arr.push(b);
  }

  return arr;
}

console.log(f(2));

//==========================

// If function return array
if (Array.isArray(f(4))) {
  console.log("Test Passsed");
} else console.log("Failed");

// If passed param is 0 then return empty array

if (!f(0).length) {
  console.log("Test Passsed");
} else console.log("Failed");

// If passed param is 1 then return  [1]

if (f(1)[0] === 1) {
  console.log("Test Passsed");
} else console.log("Failed");

// If passed param is 2 then return  [1,1]

if (JSON.stringify(f(2)) === JSON.stringify([1, 1])) {
  console.log("Test Passsed");
} else console.log("Failed");

// If passed param is 3 then return  [1,1,2]

if (JSON.stringify(f(3)) === JSON.stringify([1, 1, 2])) {
  console.log("Test Passsed");
} else console.log("Failed");
