function solve(name, lastName,hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }

    return JSON.stringify(obj)
}

console.log(solve('George', 'Jones', 'Brown'))