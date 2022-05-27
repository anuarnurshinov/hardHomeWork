let num = 266219;
let newArr = num.toString().split('');
console.log(newArr);
let res = newArr.reduce((acc, rec) => acc * rec);
console.log(res);
console.log((res ** 3).toString().slice(0, 2))