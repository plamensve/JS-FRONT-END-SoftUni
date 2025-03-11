function solve(jsonInfo) {
    let objParse = JSON.parse(jsonInfo)
    let result = []

    for (let i = 0; i < Object.keys(objParse).length; i++) {
        result.push(`${Object.keys(objParse)[i]}: ${objParse[Object.keys(objParse)[i]]}`)
    }

    return result.join('\n')
}

console.log(solve('{"name": "George", "age": 40, "town": "Sofia"}'))