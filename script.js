let randomNumber = Math.random(1);
let phrase = `Давно выяснено, что при оценке 
дизайна и композиции читаемый текст 
мешает сосредоточиться. Lorem Ipsum 
используют потому, что тот обеспечивает 
более или менее стандартное заполнение 
шаблона, а также реальное распределение 
букв и пробелов в абзацах, которое не 
получается при простой дубликации 
"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."`

function stringCutter(str) {
    if (typeof (str) != "string") {
        alert('Это не строка')
    }
    else {
        str.trim()
        if (str.length > 30) {
            alert(str.substring(0, 30) + '...')
        }
    }
}
stringCutter(phrase)
stringCutter(randomNumber)