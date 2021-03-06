const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newBegin = '1 Jan 2023';

function countdown() {
    const newDate = new Date(newBegin);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60; 

     daysEl.innerHTML = days;
     hoursEl.innerHTML = formatTime(hours);
     minsEl.innerHTML = formatTime(minutes);
     secondsEl.innerHTML = formatTime(seconds);
    
}

function formatTime (time){
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);