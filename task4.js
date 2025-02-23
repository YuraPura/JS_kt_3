function checkElem(array, callback) {
  return array.some(callback);
}

const array = [1, 2, 3, 4];
const result = checkElem(array, (elem) => elem === 3);

console.log(result); // true
