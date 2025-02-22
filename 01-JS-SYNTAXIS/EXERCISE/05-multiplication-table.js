function multiplicationTable (num) {
    let printChars = ""

    for (let i = 1; i <= 10; i++) {
        printChars += `${num} X ${i} = ${num * i}\n`
    }

    return printChars
}

let result = multiplicationTable(2)
console.log(result)