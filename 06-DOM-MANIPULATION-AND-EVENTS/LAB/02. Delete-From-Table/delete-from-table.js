function deleteByEmail() {
    let getInput = document.querySelector('[name="email"]');
    let inputValue = getInput.value;

    let emailList = Array.from(document.querySelectorAll('tbody tr'));

    for (let row of emailList) {
        let cells = row.querySelectorAll('td')

        let email = cells[1].textContent

        if (inputValue === email) {
            row.remove()

            let result = document.getElementById('result')
            result.textContent = 'Deleted.'
        } else {
            let result = document.getElementById('result')
            result.textContent = 'Not found.'
        }

    }

}
