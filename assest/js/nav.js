console.clear();

function radar(x) {
  let y = x;

  let n = y.sort((a, b) => a - b);
  console.log(n);
}

console.log(radar([3, 45, 6, 7, 23, 5]));
