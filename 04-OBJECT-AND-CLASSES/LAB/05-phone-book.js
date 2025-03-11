function solve(info) {
    let phoneBook = {}
    let result = []

    for (let i of info) {
       let tokens = i.split(' ')

        phoneBook[tokens[0]] = tokens[1]
    }

    for (let [x, y] of Object.entries(phoneBook)) {
        result.push(`${x} -> ${y}`)
    }

    return result.join('\n')
}

console.log(solve(
    ['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344',
    'Timr 0888828282']
)
)