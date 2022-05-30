let lang = "en"
let week = [
    [
        "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота",
        "Воскресенье",
    ],
    [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday",
        "Sunday"
    ],
];


// Решение с помощью многомерного массива
(lang == "ru") ?
    week.splice(-1, 1) :
    week.splice(0, 1);
console.log(week);

// Функции для switch и if
function englishDaysPusher(arr) {
    arr.length = 0;
    arr.push(
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday",
        "Sunday")
}
function russianDaysPusher(arr) {
    arr.length = 0;
    arr.push(
        "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота",
        "Воскресенье")
}


// Решение с помощью if
if (lang == "ru") {
    russianDaysPusher(week)
    console.log(week)
}
else if (lang == "en") {
    englishDaysPusher(week)
    console.log(week)
}


// Решение с помощью switch
switch (lang) {
    case "ru":
        russianDaysPusher(week)
        console.log(week)
        break;
    case "en":
        englishDaysPusher(week)
        console.log(week)
        break;
}


