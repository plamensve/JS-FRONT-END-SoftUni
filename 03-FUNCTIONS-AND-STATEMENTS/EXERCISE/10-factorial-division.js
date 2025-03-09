function solve(num1, num2) {
    let acc1 = 1;
    let acc2 = 1;

    for (let i = 1; i < num1; i++) {
        acc1 += acc1 * i
    }

     for (let i = 1; i < num2; i++) {
        acc2 += acc2 * i
    }

     let result = acc1 / acc2

    return `${result.toFixed(2)}`


}

console.log(solve(6, 2))