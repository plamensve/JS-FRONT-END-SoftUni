function solve (num1, num2, num3) {
    let myArr = [num1, num2, num3]
    let smallest = myArr[0]
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] < smallest) {
            smallest = myArr[i]
        }
    }

    return smallest;
}

console.log(solve(5, 2, 3))