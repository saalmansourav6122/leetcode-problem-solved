//Outer loop
for (let i = 0; i < 3; i++) {
  //Inner loop
  for (let j = 0; j < 3; j++) {
    //console.log(`i = ${i}, j = ${j}`);
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  //console.log(`Element at row ${i}`);
  for (let j = 0; j < matrix[i].length; j++) {
    //console.log(`column ${j}: ${matrix[i][j]}`);
  }
}

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  //console.log(pattern);
}

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && 0 <= i && j < arr.length && arr[j] === arr[i] / 2) {
        console.log(`It's work ${arr[j]}`);
        return true;
      }
    }
  }
  return false;
};

let arr = [16, 2, 8, 3];
checkIfExist(arr);
