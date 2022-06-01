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

