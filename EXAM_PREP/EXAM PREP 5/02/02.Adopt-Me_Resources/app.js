window.addEventListener("load", solve);

function solve() {
    let adoptBtn = document.getElementById('adopt-btn');
    adoptBtn.addEventListener('click', onAdopt);

    let mainUl = document.getElementById('adoption-info');
    function onAdopt(event){
        event.preventDefault();

        let type = document.getElementById('type').value;
        let gender = document.getElementById('gender').value;
        let age = document.getElementById('age').value;

        let li = document.createElement('li')
        mainUl.appendChild(li)

        let article = document.createElement('article')
        li.appendChild(article)

        let typeP = document.createElement('p')
        typeP.textContent = `Pet:${type}`;
        article.appendChild(typeP);

        let genderP = document.createElement('p')
        genderP.textContent = `Gender:${gender}`;
        article.appendChild(genderP)

        let ageP = document.createElement('p')
        ageP.textContent = `Age:${age}`;
        article.appendChild(ageP);

        let div = document.createElement('div')
        div.className = 'buttons'
        li.appendChild(div)

        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.className = 'edit-btn'
        editBtn.addEventListener('click', () => onEdit(type, gender, age, li))
        div.appendChild(editBtn)


        let doneBtn = document.createElement('button')
        doneBtn.textContent = 'Done'
        doneBtn.className = 'done-btn'
        doneBtn.addEventListener('click', () =>  onDone(li, article))
        div.appendChild(doneBtn)

        document.getElementById('type').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('age').value = '';
    }

    function onEdit(type, gender, age, li){
        document.getElementById('type').value = type;
        document.getElementById('gender').value = gender;
        document.getElementById('age').value = age;

        li.remove();
    }

    function onDone(li, article){
        li.remove();

        let adoptedList = document.getElementById('adopted-list')
        let newLi = document.createElement('li')
        adoptedList.appendChild(newLi)
        newLi.appendChild(article)

        let clearBtn = document.createElement('button')
        clearBtn.textContent = 'Clear'
        clearBtn.className = 'clear-btn'
        clearBtn.addEventListener('click', () => onClear(newLi))
        newLi.appendChild(clearBtn)
    }

    function onClear(li){
        li.remove();
    }

  }
  