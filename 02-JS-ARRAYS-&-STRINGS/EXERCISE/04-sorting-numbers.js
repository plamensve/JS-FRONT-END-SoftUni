function solve(arr) {
    let newArr = []
    let sortedArr = arr.sort((a, b) => a - b);

    while (sortedArr.length > 0) {
        let min = sortedArr.shift()
        let max = sortedArr.pop()

        newArr.push(min)
        newArr.push(max)
    }

    return newArr
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))