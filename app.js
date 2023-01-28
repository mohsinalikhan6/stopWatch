let min = 00;
let sec = 00;
let msec = 00;

let minDisplay = document.getElementById('min');
let secDisplay = document.getElementById('sec');
let msecDisplay = document.getElementById('msec');

let interval;

const timer = () => {
    msec++
    msecDisplay.innerHTML = msec;
    if (msec === 100) {
        sec++;
        secDisplay.innerHTML = sec;
        msec = 00;
    }
    else if (sec === 60) {
        min++;
        sec = 00;
        minDisplay.innerHTML = min;
    }
}

const start = () => {
    if (!interval) {
        interval = setInterval(timer, 100)
    }
}

const stop = () => {
    clearInterval(interval)
    interval = false
}

const reset = () => {
    min = 00;
    sec = 00;
    msec = 00;
    minDisplay.innerHTML = 00;
    secDisplay.innerHTML = 00;
    msecDisplay.innerHTML = 00;
    stop();
}

const lap = () => {
    let li = document.createElement('li');
    let li_value = document.createTextNode(`${min} : ${sec} : ${msec}`)
    // console.log(li_value)
    li.appendChild(li_value)
    // console.log(li)
    let ul = document.getElementById('lapList');
    ul.appendChild(li)
}

const lapReset = () => {
    let ul = document.getElementById('lapList').innerHTML = "";
    // console.log(ul)
}

const resetAll = () => {
    lapReset();
    reset()
}