function sumDigits(digits) {
    let result = 0;
    let digits_string = digits.toString();

    for (let i = 0; i < digits_string.length; i++) {
        result += Number(digits_string[i])
    }



    return result
}

console.log(sumDigits(245678))