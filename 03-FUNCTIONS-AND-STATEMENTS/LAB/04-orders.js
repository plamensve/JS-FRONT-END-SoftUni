function solve(product, quantity) {
    let menu = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00
    }

    return `${(menu[product] * quantity).toFixed(2)}`

}

console.log(solve("coffee", 2))