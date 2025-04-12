let mainUrl = 'http://localhost:3030/jsonstore/reservations/'

let loadRes = document.getElementById('load-history')
loadRes.addEventListener('click', loadReservation)

let addRes = document.getElementById('add-reservation')
addRes.addEventListener('click', onAddReservation)

let editRes = document.getElementById('edit-reservation')
editRes.addEventListener('click', editReservation)

async function showReservation() {
    let res = await fetch(mainUrl)
    let data = await res.json();
    return Object.values(data)
}

async function loadReservation() {
    let data = await showReservation();

    let mainDiv = document.getElementById('list')
    mainDiv.replaceChildren();

    for (let x of data) {

        let div = document.createElement('div')
        div.className = 'container'
        mainDiv.appendChild(div)

        let names = document.createElement('h2')
        names.textContent = x.names;
        div.appendChild(names)

        let date = document.createElement('h3')
        date.textContent = x.date;
        div.appendChild(date)

        let days = document.createElement('h3')
        days.textContent = x.days
        days.id = 'reservation_days'
        div.appendChild(days)

        let divBtn = document.createElement('div')
        divBtn.className = 'buttons-container'
        div.appendChild(divBtn)

        let changeBtn = document.createElement('button')
        changeBtn.className = 'change-btn'
        changeBtn.textContent = 'Change'
        changeBtn.addEventListener('click', () => onChange(x))
        divBtn.appendChild(changeBtn)

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn'
        deleteBtn.textContent = 'Done'
        deleteBtn.addEventListener('click', () => onDelete(x._id))
        divBtn.appendChild(deleteBtn)
    }
}

async function onDelete(id) {
    let deleteUrl = `http://localhost:3030/jsonstore/reservations/${id}`
    let options = {
        method: 'DELETE'
    }

    await fetch(deleteUrl, options)
    await loadReservation();
}

async function onAddReservation() {
    let postUrl = 'http://localhost:3030/jsonstore/reservations/'

    let names = document.getElementById('names').value;
    let days = document.getElementById('days').value;
    let date = document.getElementById('date').value;

    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            names: names,
            days: days,
            date: date
        })
    }

    document.getElementById('names').value = '';
    document.getElementById('days').value = '';
    document.getElementById('date').value = '';

    await fetch(postUrl, options);
    await loadReservation();
}

async function onChange(record){
    document.getElementById('names').value = record.names;
    document.getElementById('days').value = record.days;
    document.getElementById('date').value = record.date;

    addRes.disabled = true;
    editRes.disabled = false;
    editRes.dataset.id = record._id
    // record.remove();
}

async function editReservation(){
    let recordId = editRes.dataset.id
    let updateUrl = `http://localhost:3030/jsonstore/reservations/${recordId}`

    let names = document.getElementById('names').value;
    let days = document.getElementById('days').value;
    let date = document.getElementById('date').value;

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            names: names,
            days: days,
            date: date,
            _id: recordId
        })
    }

    await fetch(updateUrl, options)

    addRes.disabled = false;
    editRes.disabled = true;

    document.getElementById('names').value = '';
    document.getElementById('days').value = '';
    document.getElementById('date').value = '';
}