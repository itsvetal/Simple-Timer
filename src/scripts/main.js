'use strict'

/**
 * Import the "moment" library
 */
import moment from "moment";

/**
 * Import localization
 */
import 'moment/locale/uk'

/**
 * Import the "moment-timer" plugin for the "moment" library
 */
import "moment-timer";

/**
 * The variable, that track the time in the timer
 * @type {null} start initialization value
 */
let remainingTime = null;

/**
 * Add event listener to loading content of the DOM
 */
document.addEventListener('DOMContentLoaded', onContentLoaded);

/**
 * This function starts when the content of the page is loaded.
 * It contains the listeners for buttons
 */
function onContentLoaded() {

    //Add the listener to the button, that increase the number on the timer
    document.getElementById('plus_button')
        .addEventListener('click', () => setTime(true));

    //Add the listener to the button, that decrease the number on the timer
    document.getElementById('minus_button')
        .addEventListener('click', () => setTime(false));

    //Add the listener to the start button
    document.getElementById('start_button')
        .addEventListener('click', () => startTimer());
}

/**
 * Returns the number of the minutes for timer
 * @returns {number} is the int number
 */
function getValue() {
    return +((document.getElementById('value')).textContent);
}

/**
 * Increase or decrease the number by one, according the boolean;
 * that comes in the arguments
 * @param bol is the boolean expression
 * @returns {number} is the int number
 */
function setTime(bol) {
    const element = document.getElementById('value');
    const value = getValue();
    element.textContent = (bol ? value + 1 : value === 0 ? value : value - 1).toString();
    return value;
}

/**
 * Creates the timer with some parameters. The duration
 * of the timer comes in the arguments
 * @param durationValue the duration for timer in seconds
 * @param element is the HTML element, for displaying the remaining
 * time
 * @param label HTML element for informing the user about the events
 */
function createTimer(durationValue, element, label) {
    return moment.duration(durationValue, 'seconds').timer({
        loop: false,
        start: false
    }, () => {
        element.textContent = '0:00';
        label.innerText = 'Час вийшов!';
        element.textContent = '';
    });
}

/**
 * Starts the timer and add the event listeners for buttons
 * stop and reset
 */
function startTimer() {
    const label = document.getElementById("label");
    const element = document.getElementById('timer');
    const durationValue = getValue() * 60;
    let timer;

    /*
    Check the timer, the value of the element, that displaying the timer
     and its status
     */
    if (!timer || !element.textContent || timer.isStopped) {
        timer = createTimer(remainingTime || durationValue, element, label);
        timer.start();
    }

    /*
    At one second interval checks the remaining time and displaying it
     */
    const interval = setInterval(() => {

        //Get the remaining time from the timer
        remainingTime = moment.duration(timer.getRemainingDuration());

        //Get the minutes from the remaining time and round down it
        const minutes = Math.floor(remainingTime.asMinutes());

        //Get the seconds using the remainder of division
        const seconds = ((remainingTime.asSeconds()) % 60).toFixed(0);

        /*
        If the remaining of the timer time less than zero, stop the timer
        and clear interval
         */
        if (remainingTime.asSeconds() < 0) {
            clearInterval(interval);
            timer.stop();
        } else {
            label.innerText = 'Залишилось';
            element.innerText = `${minutes}:${seconds.padStart(2, '0')}`;
        }
    }, 1000);

    //Add event listener to the stop button and stop the timer on the click
    document.getElementById('stop_button')
        .addEventListener('click', () => {
            timer.stop();
            clearInterval(interval);
        });

    //Add event listener to the reset button and reset the timer on the click
    document.getElementById('reset_button')
        .addEventListener('click', () => {
            timer.stop();
            clearInterval(interval);
            remainingTime = null;

            /*
            Reset HTML elements that displaying the label of the timer
            and remaining time
             */
            element.textContent = '';
            label.innerText = 'Вкажіть час в хвилинах';
        });

}
