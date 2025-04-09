let host = 'http://localhost:3030/jsonstore/orders/'

let loadOrdersBtn = document.getElementById('load-orders')
loadOrdersBtn.addEventListener('click', loadOrders)

let creatOrderBtn = document.getElementById('order-btn')
creatOrderBtn.addEventListener('click', createOrder)

let editOrderBtn = document.getElementById('edit-order')
editOrderBtn.addEventListener('click', onEdit)


async function showOrders(){
    let res = await fetch(host)
    let data = await res.json()

    return Object.values(data)
}

async function loadOrders(){
    let orders = await showOrders();

    let divOrderList = document.getElementById('list');
    divOrderList.replaceChildren();

    for (let order of orders){
        let divContainer = document.createElement('div')
        divContainer.className = 'container'
        divOrderList.appendChild(divContainer)

        let productName = document.createElement('h2')
        productName.textContent = order.name
        divContainer.appendChild(productName)

        let productQuantity = document.createElement('h3')
        productQuantity.textContent = order.quantity
        divContainer.appendChild(productQuantity)

        let productDate = document.createElement('h3')
        productDate.textContent = order.date
        divContainer.appendChild(productDate)

        let changeBtn = document.createElement('button')
        changeBtn.textContent = 'Change'
        changeBtn.className = 'change-btn'
        changeBtn.addEventListener('click', () => onChange(order))
        divContainer.appendChild(changeBtn)

        let doneBtn = document.createElement('button')
        doneBtn.textContent = 'Done'
        doneBtn.className = 'done-btn'
        doneBtn.addEventListener('click', () => onDone(order._id))
        divContainer.appendChild(doneBtn)
    }
}

async function createOrder(){
    let productNameInput = document.getElementById('name').value
    let productQuantityInput = document.getElementById('quantity').value
    let productDateInput = document.getElementById('date').value

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: productNameInput,
            quantity: productQuantityInput,
            date: productDateInput
        })
    };

    await fetch(host, options)
    await loadOrders();
    document.getElementById('name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('date').value = '';
}

async function onDone(id){
    let order = `${host}${id}`;

    let options = {
        method: 'DELETE'
    };

    await fetch(order, options);
    await loadOrders();
}

async function onChange(order){
    document.getElementById('name').value = order.name;
    document.getElementById('quantity').value = order.quantity;
    document.getElementById('date').value = order.date;
    editOrderBtn.dataset.id = order._id

    editOrderBtn.disabled = false;
    creatOrderBtn.disabled = true;
}

async function onEdit(){
    let updatedData = {
        name: document.getElementById('name').value,
        quantity: document.getElementById('quantity').value,
        date: document.getElementById('date').value
    };

    await fetch(`${host}${editOrderBtn.dataset.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
    });

    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('date').value = '';

    editOrderBtn.disabled = true;
    creatOrderBtn.disabled = false;
    editOrderBtn.removeAttribute('data-id');

    await loadOrders();
}
