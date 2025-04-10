function attachEvents() {
    let loadBtn = document.getElementById('btnLoad')
    loadBtn.addEventListener('click', loadPhonebook)

    let createBtn = document.getElementById('btnCreate')
    createBtn.addEventListener('click', onCreate)

    async function showPhonebook(){
        let url = 'http://localhost:3030/jsonstore/phonebook'
        let res = await fetch(url)
        let data = await res.json()

        return Object.values(data)
    }

    async function loadPhonebook(){
        let data = await showPhonebook();

        let mainUl = document.getElementById('phonebook')
        mainUl.replaceChildren();

        for (let x of data){
            let newLi = document.createElement('li')
            newLi.textContent = `${x.person}: ${x.phone}`
            let newBtn = document.createElement('button')
            newBtn.textContent = 'Delete'
            newBtn.addEventListener('click', () => onDelete(x._id))
            newLi.appendChild(newBtn)
            mainUl.appendChild(newLi)
        }

        async function onDelete(id){
            let url = `http://localhost:3030/jsonstore/phonebook/${id}`

            let options = {
                method: 'DELETE'
            }
            await fetch(url, options)
            await loadPhonebook();
        }
    }

    async function onCreate(){
        let person = document.getElementById('person').value
        let phone = document.getElementById('phone').value

        let url = 'http://localhost:3030/jsonstore/phonebook'

        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                person: person,
                phone: phone
            })
        }

        await fetch(url, options);
        await loadPhonebook();
    }
}

attachEvents();