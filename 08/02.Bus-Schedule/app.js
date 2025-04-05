function solve() {

    let currentStopName = '';
    let nextStopId = 'depot';

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;

        const res = await fetch(url);
        const data = await res.json();

        currentStopName = data.name;
        nextStopId = data.next;

        const info = document.getElementById('info');
        let span = document.createElement('span')
        span.classList.add('info')
        span.textContent = `Next stop ${currentStopName}`;
        info.replaceChildren(span)

        document.getElementById('depart').disabled = true;
        document.getElementById('arrive').disabled = false;
    }

    function arrive() {
        const info = document.getElementById('info');
        let span = document.createElement('span')
        span.classList.add('info')
        span.textContent = `Arriving at ${currentStopName}`;
        info.replaceChildren(span)

        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();