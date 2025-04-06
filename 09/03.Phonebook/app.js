let phonebookUrl = 'http://localhost:3030/jsonstore/phonebook';
function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
}

async function onLoad(){
    let res = await fetch(phonebookUrl)
    let data = await res.json()

    let ul = document.getElementById('phonebook');
    ul.replaceChildren();

    for (let [id, value] of Object.entries(data)){
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', () => onDelete(id))

        let newLi = document.createElement('li')
        newLi.append(`${value.person}: ${value.phone}`);

        newLi.append(deleteBtn); // добавя бутона
        ul.appendChild(newLi);
    }

}

async function onDelete(id){
    await fetch(`${phonebookUrl}/${id}`, { method: 'DELETE' });

    await onLoad();
}

async function onCreate() {
    let name = document.getElementById('person')
    let phone = document.getElementById('phone')

    let nameInput = name.value;
    let phoneInput = phone.value;

    if (!nameInput || !phoneInput){
        return;
    }

    let message = {
        "person": nameInput,
        "phone": phoneInput
    };

    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    };

    await fetch(phonebookUrl, options);
    await onLoad();
    name.value = '';
    phone.value = '';

}

attachEvents();