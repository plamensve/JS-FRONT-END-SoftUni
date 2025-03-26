function addItem() {
    let inputValue = document.getElementById('newItemText');
    let text = inputValue.value;

    if (!text) {
        return;
    }

    let newLi = document.createElement('li')
    newLi.textContent = text;

    let listItems = document.getElementById('items');
    listItems.appendChild(newLi)

    inputValue.value = ''
}
