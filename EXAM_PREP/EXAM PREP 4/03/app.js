let hostUrl = 'http://localhost:3030/jsonstore/matches/';

let loadMatchesBtn = document.getElementById('load-matches')
loadMatchesBtn.addEventListener('click', showMatches);

let addMatch = document.getElementById('add-match')
addMatch.addEventListener('click', onAdd)

let editMatch = document.getElementById('edit-match')
editMatch.addEventListener('click', onEdit)

async function loadMatches(){
    let res = await fetch(hostUrl);
    let data = await res.json();

    return Object.values(data)
}

async function showMatches(){
    let matches = await loadMatches();
    console.log(matches)

    let matchesList = document.getElementById('list')
    matchesList.replaceChildren();

    for (let match of matches){
        let li = document.createElement('li');
        li.className = 'match';
        matchesList.appendChild(li)

        let div = document.createElement('div');
        div.className = 'info';
        li.appendChild(div)

        let hostP = document.createElement('p')
        hostP.textContent = match.host;
        div.appendChild(hostP);

        let scoreP = document.createElement('p')
        scoreP.textContent = match.score;
        div.appendChild(scoreP);

        let guestP = document.createElement('p')
        guestP.textContent = match.guest;
        div.appendChild(guestP);

        let divBtn = document.createElement('div');
        divBtn.className = 'btn-wrapper';
        li.appendChild(divBtn);

        let changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.className = 'change-btn';
        changeBtn.addEventListener('click', () => onChange(match))
        divBtn.appendChild(changeBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => onDelete(match._id))
        divBtn.appendChild(deleteBtn);
    }
}

async function onDelete(id){
    let url = `http://localhost:3030/jsonstore/matches/${id}`;

    let options = {
        method: 'DELETE'
    }

    await fetch(url, options);
    await showMatches();
}

async function onAdd(){
    let host = document.getElementById('host').value;
    let score = document.getElementById('score').value;
    let guest = document.getElementById('guest').value;

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            host: host,
            score: score,
            guest: guest,
        })
    }

    document.getElementById('host').value = '';
    document.getElementById('score').value = '';
    document.getElementById('guest').value = '';
    await fetch(hostUrl, options);
    await showMatches();
}

async function onChange(match){
    let host = match.host;
    let score = match.score;
    let guest = match.guest;

    document.getElementById('host').value = host;
    document.getElementById('score').value = score;
    document.getElementById('guest').value = guest;

    addMatch.disabled = true;
    editMatch.disabled = false;
    editMatch.dataset.id = match._id;


}

async function onEdit(){
    let matchID = editMatch.dataset.id
    let editUrl = `http://localhost:3030/jsonstore/matches/${matchID}`;

    let host = document.getElementById('host').value;
    let score = document.getElementById('score').value;
    let guest = document.getElementById('guest').value;

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            host: host,
            score: score,
            guest: guest
        })
    }

    await fetch(editUrl, options);
    await showMatches();
    document.getElementById('host').value = '';
    document.getElementById('score').value = '';
    document.getElementById('guest').value = '';
    addMatch.disabled = false;
    editMatch.disabled = true;
}































