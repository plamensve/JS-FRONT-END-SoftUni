function solve(arrA, arrB) {
    let stock = {};

    for (let i = 0; i < arrA.length; i += 2) {
        let product = arrA[i];
        let quantity = Number(arrA[i + 1]) || 0;
        stock[product] = (stock[product] || 0) + quantity;
    }

    for (let i = 0; i < arrB.length; i += 2) {
        let product = arrB[i];
        let quantity = Number(arrB[i + 1]) || 0;
        stock[product] = (stock[product] || 0) + quantity;
    }


    return Object.entries(stock).map(([product, quantity]) => `${product} -> ${quantity}`).join('\n');
}


console.log(solve([
'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
[
'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
]
))