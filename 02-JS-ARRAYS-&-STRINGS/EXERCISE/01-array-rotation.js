function solve(arr, rotations) {
    let arrRotation = arr;

    for (let i = 0; i < rotations; i++) {
        arrRotation.push(arrRotation.shift())
    }

    return arrRotation.join(' ')
}

console.log(solve([51, 47, 32, 61, 21], 2))