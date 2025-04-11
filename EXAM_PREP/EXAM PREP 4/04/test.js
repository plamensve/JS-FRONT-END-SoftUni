// App ID - gbyINDtBYdfixyGBHWDgLgv7xXqxZxebvRYDyIs9
// REST Key - uMdGRjFiH9LKcZhMv5gYlIK9JG6B6Uvy32QkQULh
// API URL - https://parseapi.back4app.com/classes/orders


let host = 'https://parseapi.back4app.com/classes/orders'

let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', createOrder)

let getBtn = document.getElementById('get')
getBtn.addEventListener('click', loadInfo)


async function onGet() {
    let options = {
        method: 'GET',
        headers: {
            'X-Parse-Application-Id': 'gbyINDtBYdfixyGBHWDgLgv7xXqxZxebvRYDyIs9',
            'X-Parse-REST-API-Key': 'uMdGRjFiH9LKcZhMv5gYlIK9JG6B6Uvy32QkQULh'
        }
    }

    let res = await fetch(host, options)
    let data = await res.json()

    return Object.values(data.results)
}

async function loadInfo() {
    let data = await onGet();
    console.log(data)
    let div = document.getElementById('info');
    div.replaceChildren();

    for (let x of data) {
        let p = document.createElement('p');
        p.textContent = `Продукт: ${x.product}, Количество: ${x.quantity}, Клиент: ${x.client}`;
        div.appendChild(p);
    }
}


async function createOrder(event) {
    event.preventDefault();

    let postUrl = 'https://parseapi.back4app.com/classes/orders';

    let product = document.getElementById('product').value;
    let quantity = parseInt(document.getElementById('quantity').value);
    let client = document.getElementById('client').value;

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': 'gbyINDtBYdfixyGBHWDgLgv7xXqxZxebvRYDyIs9',
            'X-Parse-REST-API-Key': 'uMdGRjFiH9LKcZhMv5gYlIK9JG6B6Uvy32QkQULh'
        },
        body: JSON.stringify({
                product: product,
                quantity: quantity,
                client: client
            })
    };

    await fetch(postUrl, options);
}