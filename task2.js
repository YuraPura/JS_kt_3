function changeElem(array, n) {
  return array.map((item) => item * n); // map maked new arr
}

const array = [1, 2, 3, 4];
const result = changeElem(array, 3);

console.log(result); // [3, 6, 9, 12]
