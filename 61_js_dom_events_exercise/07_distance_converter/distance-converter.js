document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const units = {
        "km": 1000,
        "m": 1,
        "cm": 0.01,
        "mm": 0.001,
        "mi": 1609.34,
        "yrd": 0.9144,
        "ft": 0.3048,
        "in": 0.0254
    }

    const inputNumber = document.getElementById('inputDistance');
    const outputDistanceNumber = document.getElementById('outputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const convertBtn = document.getElementById('convert');


    convertBtn.addEventListener('click', (e) => {
        const input = Number(inputNumber.value) * units[inputUnits.value];
        outputDistanceNumber.value = input / units[outputUnits.value];

    })

}