let host = 'http://localhost:3030/jsonstore/appointments/'

let loadAppointmentBtn = document.getElementById('load-appointments')
loadAppointmentBtn.addEventListener('click', loadAppointment)

let addAppointmentBtn = document.getElementById('add-appointment')
addAppointmentBtn.addEventListener('click', onAdd)

let editAppointmentBtn = document.getElementById('edit-appointment')
editAppointmentBtn.addEventListener('click', () => onEdit(editAppointmentBtn.dataset.id))


async function showAppointment(){
    let res = await fetch(host)
    let data = await res.json()

    return Object.values(data)
}

async function loadAppointment() {
    let info = await showAppointment();

    let mainAppointmentUl = document.getElementById('appointments-list')
    mainAppointmentUl.replaceChildren();

    for (let x of info) {
        let appointmentLi = document.createElement('li')
        appointmentLi.className = 'appointment'
        mainAppointmentUl.appendChild(appointmentLi)

        let appointmentH2 = document.createElement('h2');
        appointmentH2.textContent = x.model;

        let appointmentH3date = document.createElement('h3')
        appointmentH3date.textContent = x.date;

        let appointmentH3service = document.createElement('h3')
        appointmentH3service.textContent = x.service

        let divBtn = document.createElement('div')
        divBtn.className = 'buttons-appointment'

        let changeBtn = document.createElement('button')
        changeBtn.className = 'change-btn'
        changeBtn.textContent = 'Change'
        changeBtn.addEventListener('click', () => onChange(x))

        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-btn'
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', () => onDelete(x))

        appointmentLi.appendChild(appointmentH2)
        appointmentLi.appendChild(appointmentH3date)
        appointmentLi.appendChild(appointmentH3service)
        divBtn.appendChild(changeBtn)
        divBtn.appendChild(deleteBtn)
        appointmentLi.appendChild(divBtn)
    }
}

async function onDelete(obj){
        let url = `http://localhost:3030/jsonstore/appointments/${obj._id}`
        let options = {
            method: 'DELETE'
        }

        await fetch(url, options)
        await loadAppointment();
    }

async function onAdd(){
        let model = document.getElementById('car-model').value
        let service = document.getElementById('car-service').value
        let date = document.getElementById('date').value

        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                model: model,
                service: service,
                date: date
            })
        };

        document.getElementById('car-model').value = '';
        document.getElementById('car-service').value = '';
        document.getElementById('date').value = '';

        await fetch(host, options)
        await loadAppointment();
    }

async function onChange(obj){
    document.getElementById('car-model').value = obj.model;
    document.getElementById('car-service').value = obj.service;
    document.getElementById('date').value = obj.date;

    addAppointmentBtn.disabled = true;
    editAppointmentBtn.disabled = false;
    editAppointmentBtn.dataset.id = obj._id;
}

async function onEdit(id){

    let url = `http://localhost:3030/jsonstore/appointments/${id}`

    let model = document.getElementById('car-model').value
    let service = document.getElementById('car-service').value
    let date = document.getElementById('date').value

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/jason' },
        body: JSON.stringify(
            {
                model: model,
                service: service,
                date: date
            }
        )
    }
    await fetch(url, options)
    await loadAppointment();
}