document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let obj = document.querySelector('#input textarea')
    let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('[type="submit"]'))

    generateBtn.addEventListener('click', onGenerate)
    buyBtn.addEventListener('click', onBuy)

    let product = [];
    let totalPrice = 0;
    let accumulateDeFactor = 0;

    function onGenerate(event) {
        event.preventDefault();

        let data = JSON.parse(obj.value);
        let tbody = document.querySelector('tbody');

        for (let x of data) {
            let img = x['img'];
            let name = x['name'];
            let price = x['price'];
            let decFactor = x['decFactor'];

            product.push(name);
            totalPrice += price;
            accumulateDeFactor += decFactor;

            let row = document.createElement('tr');

            // Image
            let col1 = document.createElement('td');
            let image = document.createElement('img');
            image.src = img;
            col1.appendChild(image);

            // Name
            let col2 = document.createElement('td');
            let col2P = document.createElement('p');
            col2P.textContent = name;
            col2.appendChild(col2P);

            // Price
            let col3 = document.createElement('td');
            let col3P = document.createElement('p');
            col3P.textContent = price;
            col3.appendChild(col3P);

            // Decoration factor
            let col4 = document.createElement('td');
            let col4P = document.createElement('p');
            col4P.textContent = decFactor;
            col4.appendChild(col4P);

            // Checkbox
            let col5 = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            col5.appendChild(checkbox);

            // Append all <td>s to the row
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
            row.appendChild(col5);

            // Append the row to the table
            tbody.appendChild(row);
        }
    }

    function onBuy(event) {
        event.preventDefault();

        let bought = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        const rows = Array.from(document.querySelectorAll('tbody tr'));

        for (let row of rows) {
            let checkbox = row.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
                let name = row.children[1].textContent;
                let price = Number(row.children[2].textContent);
                let decFactor = Number(row.children[3].textContent);

                bought.push(name);
                totalPrice += price;
                totalDecFactor += decFactor;
            }
        }

        let checkout = document.querySelector('#shop textarea');
        checkout.textContent =
            `Bought furniture: ${bought.join(', ')}\n` +
            `Total price: ${totalPrice}\n` +
            `Average decoration factor: ${bought.length ? (totalDecFactor / bought.length) : 0}`;
    }
}