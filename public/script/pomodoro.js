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
    startButton.disabled = true;
    if (timer > 0) {
        interval = setInterval(() => {
            timer--
    
            let hours = String(Math.floor(timer/3600)).padStart(2, '0')
            let minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0')
            let seconds = String(Math.floor( timer % 60)).padStart(2, '0')
    
            console.log(hours, minutes, seconds);
            
            timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`

            if (timer <= 0) {
                clearInterval(interval);
                startButton.disabled = false;
            }

        }, 1000)
    }

    clearInterval(interval)

    if (setButtonAtivo) {
        const setInputValue = setInput.value
        const [hours, minutes] = setInputValue.split(':')         
        console.log(hours, minutes);
        
        timer = (Number(hours) * 3600) + (Number(minutes) * 60);        
        interval = setInterval(() => {
            timer--
            let displayHours = String(Math.floor(timer / 3600)).padStart(2, '0');

            let displayMinutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');

            let displaySeconds = String(timer % 60).padStart(2, '0');

            timerDisplay.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`

            if (timer <= 0) {
                clearInterval(interval);
                startButton.disabled = false;
            }

        }, 1000)


    }


})

pauseButton.addEventListener('click', ()=>{
    startButton.disabled = false;
    clearInterval(interval)
})

let setButtonAtivo = false
setButton.addEventListener('click', ()=>{

    setButtonAtivo = !setButtonAtivo

    if (setButtonAtivo) {
        setInput.style.display = "flex"
        setInput.style.opacity = "1"

        //Adiciona ":" no set
        setInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.slice(0, 4);
            if (value.length > 2) {
                value = value.slice(0, 2) + ':' + value.slice(2);
            }
            e.target.value = value;
        });



    }
    else {
        const setInput = document.getElementById('setInput')
        setInput.style.display = "none"
    }

})
