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
    let hours;
    let minutes;
    let seconds;

    if (setButtonAtivo) {
        let setInputValue = setInput.value
        let [setHours, setMinutes] = setInputValue.split(':')        

        timer = (Number(setHours) * 3600) + (Number(setMinutes)* 60);        
    }

    if (timer > 0) {
        interval = setInterval(() => {
            timer--
    
            hours = String(Math.floor(timer/3600)).padStart(2, '0')
            minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0')
            seconds = String(Math.floor( timer % 60)).padStart(2, '0')

            timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`

            if (timer <= 0) {
                clearInterval(interval);
                startButton.disabled = false;

                setTimeout(() => {document.getElementById('alert').style.opacity = '1'}, 0)
                setTimeout(() => {document.getElementById('alert').style.opacity = '0'}, 5000)
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
