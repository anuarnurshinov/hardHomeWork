let week = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
]

let now = new Date();

const showCalendar = function (array) {
    for (let i = 0; i <= array.length; i++) {
        if (i >= 5) {
            array[i] = array[i].italics()
        }
        if (i == (now.getDay() - 1)) {
            array[i] = array[i].bold()
        }
        let element = document.getElementById(`block${i}`);
        element.innerHTML = array[i];
    }
}

showCalendar(week)