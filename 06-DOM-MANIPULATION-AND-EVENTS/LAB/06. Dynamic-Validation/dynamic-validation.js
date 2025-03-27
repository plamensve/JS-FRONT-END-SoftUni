document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // vali email - <name>@<domain>.<extension> with lowercase

    let input = document.getElementById('email')

    input.addEventListener("change", validate)

    function validate(event) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+/;
        const matches = input.value.match(pattern)

        if (!matches) {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    }
}
