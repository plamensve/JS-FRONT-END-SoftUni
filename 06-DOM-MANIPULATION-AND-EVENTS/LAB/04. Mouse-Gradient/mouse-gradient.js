function attachGradientEvents() {
    let gradient = document.getElementById('gradient')

    gradient.addEventListener('mousemove', (ev) => {
        let value = Math.floor(ev.offsetX / gradient.clientWidth * 100)
        let result = document.getElementById('result');

        result.textContent = value + '%';
    })

}
