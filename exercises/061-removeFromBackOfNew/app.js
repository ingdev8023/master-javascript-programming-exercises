function removeFromBackOfNew(arr) {
  // your code here
  let newArr = [...arr]
  newArr.pop()
  return newArr
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]