'use strict'

import moment from "moment";
import "moment-timer";


console.log(typeof moment.duration.fn.timer === 'function');
const label = document.getElementById("label");
const element = document.getElementById('timer');

const timer = moment.duration(2, 'minutes').timer({
    loop: false,
    start: true
}, () => {
    label.innerText = 'Час вийшов!';
    element.remove();
});


const interval = setInterval(() => {
    const remainingTime = moment.duration(timer.getRemainingDuration());
    const minutes = Math.floor(remainingTime.asMinutes());
    const seconds = ((remainingTime.asSeconds()) % 60).toFixed(0);
    if (remainingTime.asSeconds() < 0) {
        clearInterval(interval);
    } else {
        label.innerText = 'Залишилось';
        element.innerText = `${minutes}:${seconds.padStart(2, '0')}`;
    }
}, 1000);