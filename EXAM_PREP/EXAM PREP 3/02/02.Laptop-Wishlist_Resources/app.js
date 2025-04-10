window.addEventListener("load", solve);

function solve() {
    let addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', onAdd)

    function onAdd(){
        let laptopModelInput = document.getElementById('laptop-model').value
        let storageInput = document.getElementById('storage').value
        let priceInput = document.getElementById('price').value

        let mainUl = document.getElementById('check-list')
        let mainLi = document.createElement('li')
        mainLi.className = 'laptop-item'
        mainUl.appendChild(mainLi)

        let article = document.createElement('article')
        mainLi.appendChild(article)

        let modelP = document.createElement('p')
        modelP.textContent = laptopModelInput
        article.appendChild(modelP)

        let storageP = document.createElement('p')
        storageP.textContent = `Memory: ${storageInput} TB`
        article.appendChild(storageP)

        let priceP = document.createElement('p')
        priceP.textContent = `Price: ${priceInput}$`
        article.appendChild(priceP)

        let editBtn = document.createElement('button')
        editBtn.textContent = 'edit'
        editBtn.classList.add('btn', 'edit')
        editBtn.addEventListener('click', () => onEdit(laptopModelInput, storageInput, priceInput, ))
        mainLi.appendChild(editBtn)

        let okBtn = document.createElement('button')
        okBtn.textContent = 'ok'
        okBtn.classList.add('btn', 'ok')
        okBtn.addEventListener('click', () => onOk(mainLi))
        mainLi.appendChild(okBtn)

        document.getElementById('laptop-model').value = '';
        document.getElementById('storage').value = '';
        document.getElementById('price').value = '';
        addBtn.disabled = true;
    }

    function onEdit(model, storage, price){
        document.getElementById('laptop-model').value = model;
        document.getElementById('storage').value = storage;
        document.getElementById('price').value = price;

        document.getElementById('check-list').replaceChildren();
        addBtn.disabled = false;
    }

    function onOk(laptop){
        let laptopList = document.getElementById('laptops-list')
        laptopList.appendChild(laptop)

        let getLi = document.querySelector('.laptop-item')
        while (getLi.querySelector('button')) {
            getLi.querySelector('button').remove();
        }
        addBtn.disabled = false;
    }
}
  