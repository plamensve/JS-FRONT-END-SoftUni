function charsToString (param1, param2, param3) {
    let result = ""
    let my_array = [param1, param2, param3];

    for (let p of my_array) {
        result += p
    }

    return result
}

result = charsToString('a', 'b', 'c')
console.log(result)

