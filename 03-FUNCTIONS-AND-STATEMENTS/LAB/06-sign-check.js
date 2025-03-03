function solve(num1, num2, num3) {
    let numbers = [num1, num2, num3]
    let counter = 0;

    for (let num of numbers) {
        if (num < 0) {
            counter++;
        }
    }

    if (counter % 2 === 0) {
        return `Positive`
    } else {
        return `Negative`
    }
}

console.log(solve( -6,
-12,
 14

))