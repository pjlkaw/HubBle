import { themeFunction } from '../functions/themeFunction.js'
themeFunction(true) 

const shortButton = document.getElementById("shortID");
const breakButton = document.getElementById("breakID");
const longButton = document.getElementById("longID");
const startButton = document.getElementById("startID");
const pauseButton = document.getElementById("Pause")
const setButton = document.getElementById("setID");

let timer = 0;
let timerDisplay = document.getElementById("timerID");

shortButton.addEventListener('click', () => {
    timerDisplay.innerHTML = '00:30:00'
    timer = 30*60
})
breakButton.addEventListener('click', () => {
    timerDisplay.innerHTML = '00:15:00'
    timer = 15*60

})
longButton.addEventListener('click', () => {
    timerDisplay.innerHTML = '01:00:00'
    timer = 60*60
})

startButton.addEventListener('click', () => {
    const interval = setTimeout((t) => {
        timer--
        timerDisplay.innerHTML = timer
    }, 1000)

})
