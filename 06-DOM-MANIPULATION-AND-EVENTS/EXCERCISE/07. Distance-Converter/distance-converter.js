document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');
    let convertBtn = document.getElementById('convert');

    convertBtn.addEventListener('click', onConvert);

    function onConvert(event) {
        event.preventDefault();

        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let value = Number(inputDistance.value);

        const conversionRates = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };


        let valueInMeters = value * conversionRates[inputUnits];
        outputDistance.value = valueInMeters / conversionRates[outputUnits];
    }
}
