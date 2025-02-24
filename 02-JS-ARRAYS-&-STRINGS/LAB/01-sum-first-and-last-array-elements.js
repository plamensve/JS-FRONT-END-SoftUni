function solve(arr){
    let firstElement = arr[0]
    let lastElement = arr[arr.length -1]

    return firstElement + lastElement
}

console.log(solve([20, 30, 40]))
console.log(solve([10, 17, 22, 33]))
console.log(solve([11, 58, 69]))