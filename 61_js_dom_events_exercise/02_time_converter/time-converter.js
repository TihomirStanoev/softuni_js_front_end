document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const daysForm = document.getElementById('days');
    const hoursForm = document.getElementById('hours');
    const minutesForm = document.getElementById('minutes');
    const secondsForm = document.getElementById('seconds');
    const forms = [daysForm, hoursForm, minutesForm, secondsForm];

    const days = daysForm.querySelector('#days-input');
    const hours = hoursForm.querySelector('#hours-input');
    const minutes = minutesForm.querySelector('#minutes-input');
    const seconds = secondsForm.querySelector('#seconds-input');


    const convertToSeconds = {
        seconds: 1,
        minutes: 60,
        hours: 3600,
        days: 86400,
    }


    function updateFields(totalSeconds) {
        days.value = (totalSeconds / convertToSeconds.days).toFixed(2);
        hours.value = (totalSeconds / convertToSeconds.hours).toFixed(2);
        minutes.value = (totalSeconds / convertToSeconds.minutes).toFixed(2);
        seconds.value = (totalSeconds / convertToSeconds.seconds).toFixed((2));
    }

    for (const form of forms) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let time = Number(form.querySelector('input').value);
            time *= convertToSeconds[form.id];
            updateFields(time);
        });
    }

}