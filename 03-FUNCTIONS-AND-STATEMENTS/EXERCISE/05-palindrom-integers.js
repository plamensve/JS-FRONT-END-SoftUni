function solve(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i].toString()
        let palNum = currentNum.split('').reverse().join('')

        if (currentNum === palNum) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result.join('\n')
}

console.log(solve([123,323,421,121]))