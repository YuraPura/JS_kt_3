function sumElems(array) {
  let sum = 0;
  for (const item of array) {
    const num = Number(item);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  return sum;
}

const array = ["10", "Строка", "5g", "15", "05"];
const result = sumElems(array);

console.log(result); // 30
