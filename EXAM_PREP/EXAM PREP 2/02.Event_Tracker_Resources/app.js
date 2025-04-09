window.addEventListener("load", solve);

function solve() {
    let saveBtn = document.getElementById('save')
    saveBtn.addEventListener('click', onSave)


    function onSave(event) {
        event.preventDefault()

        let eventName = document.getElementById('event').value
        let note = document.getElementById('note').value
        let date = document.getElementById('date').value

        if (!eventName || !note || !date) {
            return;
        }

        // Main ul which save all events
        let mainUl = document.getElementById('upcoming-list')

        let mainLi = document.createElement('li')
        mainLi.className = 'event-item'
        mainUl.appendChild(mainLi)

        let div = document.createElement('div')
        div.className = 'event-container'
        mainLi.appendChild(div)

        let article = document.createElement('article')
        div.appendChild(article)

        let buttons = document.createElement('div')
        buttons.className = 'buttons'
        let editBtn = document.createElement('button')
        editBtn.addEventListener('click', () => onEdit(mainLi))
        editBtn.classList.add('btn', 'edit')
        editBtn.textContent = 'Edit'
        buttons.appendChild(editBtn)

        let doneBtn = document.createElement('button')
        doneBtn.addEventListener('click', () => onDone(article))
        doneBtn.classList.add('btn', 'done')
        doneBtn.textContent = 'Done'
        buttons.appendChild(doneBtn)

        div.appendChild(buttons)

        let nameEventP = document.createElement('p')
        nameEventP.textContent = `Name: ${eventName}`
        article.appendChild(nameEventP)

        let noteP = document.createElement('p')
        noteP.textContent = `Note: ${note}`
        article.appendChild(noteP)

        let dateP = document.createElement('p')
        dateP.textContent = `Date: ${date}`
        article.appendChild(dateP)

        document.getElementById('event').value = '';
        document.getElementById('note').value = '';
        document.getElementById('date').value = '';


        let deleteBtn = document.querySelector('.delete')
        deleteBtn.addEventListener('click', onDelete)

        function onEdit(mainLi) {
            document.getElementById('event').value = eventName
            document.getElementById('note').value = note
            document.getElementById('date').value = date

            mainLi.replaceChildren();
        }

        function onDone(article) {
            let eventListUl = document.getElementById('events-list');

            let eventLi = document.createElement('li');
            eventLi.className = 'event-item';


            let articleClone = article.cloneNode(true);
            eventLi.appendChild(articleClone);
            eventListUl.appendChild(eventLi);

            mainLi.remove();
        }

        function onDelete() {
            document.getElementById('events-list').replaceChildren();
        }

    }
}

