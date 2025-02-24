function cookingByNumbers (number, param1, param2, param3, param4, param5) {
    let theNumber = Number(number);
    let paramOperations = [param1, param2, param3, param4, param5]

    let operations = {
        "chop": function (num1) {
            return num1 / 2
        },

        "dice": function (num1) {
            return Math.sqrt(num1)
        },

        "spice": function (num1) {
            return num1 + 1
        },

        "bake": function (num1) {
            return num1 * 3
        },

        "fillet": function (num1) {
            return num1 * 0.8
        }
    }

    for (let i = 0; i < paramOperations.length; i++) {
        theNumber = operations[paramOperations[i]](theNumber)

        if (theNumber % 1 === 0) {
            console.log(theNumber);
        } else {
            console.log(theNumber.toFixed(1))
        }
    }

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')