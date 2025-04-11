let mainUrl = 'http://localhost:3030/jsonstore/records/'

let loadBtn = document.getElementById('load-records');
loadBtn.addEventListener('click', loadRecords);

let addRecord = document.getElementById('add-record');
addRecord.addEventListener('click', onAddRecord);

let editRecord = document.getElementById('edit-record')
editRecord.addEventListener('click', onEditRecord)

async function showRecords(){
    let res = await fetch(mainUrl);
    let data = await res.json();
    return Object.values(data)
}

async function loadRecords(){
    let data = await showRecords();

    let list = document.getElementById('list');
    list.replaceChildren();

    for (let x of data){
        let li = document.createElement('li');

        li.className = 'record';
        list.appendChild(li)

        let div = document.createElement('div');
        div.className = 'info';
        li.appendChild(div);

        let nameP = document.createElement('p');
        nameP.textContent = x.name;
        div.appendChild(nameP);

        let stepsP = document.createElement('p');
        stepsP.textContent = x.steps;
        div.appendChild(stepsP);

        let caloriesP = document.createElement('p');
        caloriesP.textContent = x.calories;
        div.appendChild(caloriesP);

        let divWrapper = document.createElement('div')
        divWrapper.className = 'btn-wrapper'
        li.appendChild(divWrapper)

        let changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn'
        changeBtn.textContent = 'Change'
        changeBtn.addEventListener('click', () => onChange(x))
        divWrapper.appendChild(changeBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', () => onDelete(x._id))
        divWrapper.appendChild(deleteBtn)
    }
}

async function onDelete(id){
    let deleteUrl = `http://localhost:3030/jsonstore/records/${id}`
    let options = {
        method: 'DELETE'
    }

    await fetch(deleteUrl, options)
    await loadRecords();
}

async function onAddRecord(){
    let addRecordUrl = 'http://localhost:3030/jsonstore/records/';

    let name = document.getElementById('p-name').value;
    let steps = document.getElementById('steps').value;
    let calories = document.getElementById('calories').value;

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            steps: steps,
            calories: calories,
        })
    };

    document.getElementById('p-name').value = '';
    document.getElementById('steps').value = '';
    document.getElementById('calories').value = '';
    await fetch(addRecordUrl, options);
    await loadRecords();
}

async function onChange(record){
    document.getElementById('p-name').value = record.name;
    document.getElementById('steps').value = record.steps;
    document.getElementById('calories').value = record.calories;

    addRecord.disabled = true;
    editRecord.disabled = false;
    editRecord.dataset.id = record._id;

}

async function onEditRecord(){
    let recordId = editRecord.dataset.id
    let putUrl = `http://localhost:3030/jsonstore/records/${recordId}`

    let name = document.getElementById('p-name').value;
    let steps = document.getElementById('steps').value;
    let calories = document.getElementById('calories').value;

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            steps: steps,
            calories: calories,
            _id: recordId,
        })
    };

    await fetch(putUrl, options)
    await loadRecords();

    document.getElementById('p-name').value = '';
    document.getElementById('steps').value = '';
    document.getElementById('calories').value = '';

    addRecord.disabled = false;
    editRecord.disabled = true;
}
