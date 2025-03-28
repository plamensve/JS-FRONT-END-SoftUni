document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let btnConvert = document.querySelectorAll('[type="submit"]')
    for (let btn of btnConvert) {
        btn.addEventListener('click', solve)
    }

    function solve(event){
            event.preventDefault()
            let btnId = event.target.id.slice(0, -3)

            let daysInput = document.getElementById('days-input')
            let hoursInput = document.getElementById('hours-input')
            let minutesInput = document.getElementById('minutes-input')
            let secondsInput = document.getElementById('seconds-input')

            let days, hours, minutes, seconds;

            if (btnId === 'days') {
                days = Number(daysInput.value);
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            } else if (btnId === 'hours') {
                hours = Number(hoursInput.value);
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            } else if (btnId === 'minutes') {
                minutes = Number(minutesInput.value);
                hours = minutes / 60;
                days = hours / 24;
                seconds = minutes * 60;
            } else if (btnId === 'seconds') {
                seconds = Number(secondsInput.value);
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
            }

        daysInput.value = days.toFixed(2);
        hoursInput.value = hours.toFixed(2);
        minutesInput.value = minutes.toFixed(2);
        secondsInput.value = seconds.toFixed(2);
    }
}