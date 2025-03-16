function solve(jsonArr) {
    let objArr = {}
    for (let x of jsonArr){
        let parseObj = JSON.parse(x)

        for (let [key, value] of Object.entries(parseObj)) {
            objArr[key] = value
        }
    }

    let result = []
    for (let [key, value] of Object.entries(objArr)) {
        result.push(`Term: ${key} => Definition: ${value}\n`)
    }

    return result.sort().join('')

}

console.log(solve([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
))