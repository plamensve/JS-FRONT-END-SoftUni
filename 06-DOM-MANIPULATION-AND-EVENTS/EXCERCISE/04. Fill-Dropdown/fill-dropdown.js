document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let itemText = document.getElementById('newItemText')
    let itemValue = document.getElementById('newItemValue')

    let btnAdd = document.querySelector('[type="submit"]')
    btnAdd.addEventListener('click', addOption)

    function addOption(event){
        event.preventDefault()

        let text = itemText.value
        let value = itemValue.value

        let newOptionElement = document.createElement('option')
        newOptionElement.textContent = `${text}: ${value}`

        let menuItem = document.getElementById('menu')
        menuItem.appendChild(newOptionElement)

        itemText.value = '';
        itemValue.value = '';
    }
}