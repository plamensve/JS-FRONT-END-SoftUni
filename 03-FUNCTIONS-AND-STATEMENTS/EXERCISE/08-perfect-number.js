function solve(number) {
    let numbers = []

    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            numbers.push(i)
        }
    }
    let sum = numbers.reduce((acc, current) => acc + current, 0);

    if (sum === number) {
        return `We have a perfect number!`
    } else {
        return `It's not so perfect.`
    }
}

console.log(solve(28))