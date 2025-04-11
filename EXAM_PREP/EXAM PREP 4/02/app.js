window.addEventListener("load", solve);


function solve() {
    let addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', onAdd)

    function onAdd(event){
        event.preventDefault();

        let name = document.getElementById('name').value
        let date = document.getElementById('time').value
        let desc = document.getElementById('description').value

        if (!name || !date || !desc){
            return;
        }

        let ul = document.getElementById('preview-list')
        let li = document.createElement('li')
        ul.appendChild(li)

        let article = document.createElement('article')
        li.appendChild(article)

        let nameP = document.createElement('p');
        nameP.textContent = name;
        article.appendChild(nameP)

        let dateP = document.createElement('p');
        dateP.textContent = date;
        article.appendChild(dateP)

        let descP = document.createElement('p')
        descP.textContent = desc;
        article.appendChild(descP)

        let divBtn = document.createElement('div')
        divBtn.className = 'buttons'
        li.appendChild(divBtn)

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn'
        divBtn.appendChild(editBtn);
        editBtn.addEventListener('click', () => onEdit(li, name, date, desc))

        let nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.className = 'next-btn';
        divBtn.appendChild(nextBtn)
        nextBtn.addEventListener('click', () => onNext(li, article))

        document.getElementById('name').value = '';
        document.getElementById('time').value = '';
        document.getElementById('description').value = '';
        addBtn.disabled = true;
    }

    function onEdit(li, name, date, desc){
        document.getElementById('name').value = name;
        document.getElementById('time').value = date;
        document.getElementById('description').value = desc;
        li.remove();
        addBtn.disabled = false;
    }

    function onNext(li, article){
        li.remove();
        let archiveList = document.getElementById('archive-list')
        let archiveLi = document.createElement('li')

        let archiveBtn = document.createElement('button')
        archiveBtn.textContent = 'Archive'
        archiveBtn.className = 'archive-btn'
        archiveBtn.addEventListener('click', () => onArchive(archiveLi))

        archiveLi.appendChild(article);
        archiveLi.appendChild(archiveBtn);
        archiveList.appendChild(archiveLi);
    }

    function onArchive(archiveLi){
        archiveLi.remove();
        addBtn.disabled = false;
    }
}