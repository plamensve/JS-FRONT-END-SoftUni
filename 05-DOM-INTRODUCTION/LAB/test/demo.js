function sum(a, b) {
    alert(a + b)
}

function multiply(a, b){
    alert(a * b)
}

function content() {
    let text = document.getElementById('title')
    text.textContent += ' New text'
}

function edit() {
    let addText = document.getElementById('title');
    let input  = document.getElementById('message')
    let message = input.value;
    addText.textContent += ' ' + message
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

function querySelect() {
    let query  = document.querySelectorAll('td')
    for (let el of Object.entries(query)){
        console.log(el)
    }
}































