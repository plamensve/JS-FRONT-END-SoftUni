function solve(num) {
    let part = num / 10;
    let points = 10 - part;
    let percent = '%';
    let point = '.'


    let result = `[${percent.repeat(part) + point.repeat(points)}]`
    if (points === 0) {
        return `${part * 10}% Complete!\n${result}`
    } else {
        return `${part * 10}% ${result}\nStill loading...`
    }
}

console.log(solve(100))