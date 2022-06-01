let birthDate
const isNumber = function (num) {
    return (!isNaN(parseFloat(num)) || num == null)
        && ((isFinite(num)))
        && !(num.length > num.trim().length)
}
do {
    birthDate = prompt('Ввдите ваш год рождения')
} while (!isNumber(birthDate));

