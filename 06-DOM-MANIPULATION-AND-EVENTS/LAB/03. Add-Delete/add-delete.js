function addItem() {
    // Onclick addItem - add input value
    // add [Delete] button after the added element
    // create delete function to delete the element

    let btn = document.getElementById('newItemText');
    let btnValue = btn.value;

    let element = document.getElementById('items');
    let newLi = document.createElement('li');

    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';

    deleteLink.addEventListener("click", () => newLi.remove());

    newLi.textContent = btnValue;
    newLi.appendChild(deleteLink);
    element.appendChild(newLi);

    btn.value = '';

}
