import { themeFunction } from '../functions/themeFunction.js'
themeFunction(true) 

const shortButton = document.getElementById("shortID");
const breakButton = document.getElementById("breakID");
const longButton = document.getElementById("longID");
const startButton = document.getElementById("startID");
const pauseButton = document.getElementById("pauseID")
const setButton = document.getElementById("setID");

let timer = 0;
let timerDisplay = document.getElementById("timerID");
let interval

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
    if (timer > 0) {
        interval = setInterval((t) => {
            timer--
            
    
            let hours = String(Math.floor(timer/3600)).padStart(2, '0')
            let minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0')
            let seconds = String(Math.floor( timer % 60)).padStart(2, '0')
    
            console.log(hours, minutes, seconds);
            
            timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`
        }, 1000)
    }
})

pauseButton.addEventListener('click', ()=>{
    clearInterval(interval)
})

setButton.addEventListener('click', ()=>{
    const setInput = document.getElementById('setInput')
    setInput.style.display = "flex"

})
