function calcFruit (type_of_fruit, weight, price_per_kilogram) {

    let weight_kg = weight / 1000
    let total_price = weight_kg * price_per_kilogram

    return `I need $${total_price.toFixed(2)} to buy ${weight_kg.toFixed(2)} kilograms ${type_of_fruit}.`
}

console.log(calcFruit('apple', 1563, 2.35))