function solve(data) {
    let infoBook = {};
    let result = []

    for (let x of data) {
        let [name, address] = x.split(':')
        infoBook[name] = address
    }

    for (let [x, y] of Object.entries(infoBook).sort()) {
        result.push(`${x} -> ${y}`)
    }

    return result.join('\n')
}

console.log(solve([
    'Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

))