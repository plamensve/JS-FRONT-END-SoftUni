function ages (age) {
    if (age < 0) {
        return `out of bounds`
    } else {
        if (age >= 0 && age <= 2) {
            return `baby`;
        } else if (age <= 13) {
            return `child`;
        } else if (age <= 19) {
            return `teenager`;
        } else if (age <= 65) {
            return `adult`;
        } else {
            return `elder`
        }
    }
}

result = ages(`das`)
console.log(result)