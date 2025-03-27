document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let input = document.querySelectorAll('input')

    for (let x of input) {
        x.addEventListener('focus', focused)
        x.addEventListener('blur', onBlur)
    }

    function focused(event){
        event.target.parentElement.classList.add('focused')
    }

    function onBlur(event) {
        event.target.parentElement.classList.remove('focused')
    }
}
