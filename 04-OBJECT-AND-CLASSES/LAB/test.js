function solve(jsonInfo) {
    let objParse = JSON.parse(jsonInfo)

    for (let [key, value] of Object.entries(objParse)){
        console.log(key, value)
    }

}

console.log(solve('{"name": "George", "age": 40, "town": "Sofia"}'))