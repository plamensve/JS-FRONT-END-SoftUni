function sameNumbers(number) {
    let number_string = number.toString();
    let current_char = number_string[0];
    let flag = true;
    let total_sum = 0

    for (let i = 0; i < number_string.length; i++) {
        total_sum += Number(number_string[i])
    }

    for (let i= 0; i < number_string.length; i++) {
        if ( number_string[i] === current_char ) {
            current_char = number_string[i];
        } else {
            flag = false;
        }
    }

    console.log(flag)
    return total_sum

}

console.log(sameNumbers(1234))