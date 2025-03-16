function solve(catalogue) {
    let productCatalogue = {}

    for (let x of catalogue) {
        let [product, price] = x.split(' : ')
        if (!productCatalogue.hasOwnProperty(product)) {
            productCatalogue[product] = Number(price)
            }
    }

    productCatalogue = Object.fromEntries(Object.entries(productCatalogue)
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)));

    let firstLetter = new Set();

    for (let [key, value] of Object.entries(productCatalogue)) {
        firstLetter.add(key[0])
        firstLetter.add(` ${key}: ${value}`)
    }

    return [...firstLetter].join('\n')
}

console.log(solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]))