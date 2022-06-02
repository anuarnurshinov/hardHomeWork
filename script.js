
//Первая задача с массивами
let arr = [
    26,
    43,
    34,
    55,
    65,
    28,
    94,
]

const sorter = function (arr) {
    arr.forEach(element => {
        if (element.toString()[0] == 2 || element.toString()[0] == 4) {
            console.log(element)
        }
    });
}

sorter(arr);

//Вторая задача с простыми числами

let n = 100;

nextStep:
for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextStep;
    }

    console.log(i);
}