function solve (password) {
    const digitsLength = 2;
    const otherSymbolsRestrict = 0;

    let digits = 0;
    let otherSymbols = 0;

    let error = [];

    if (password.length < 6 || password.length > 10) {
        error.push("Password must be between 6 and 10 characters")
    }

    for (let i = 0; i < password.length; i++) {
        if (/\d/.test(password[i])){
            digits += 1;
        }

        if (/\W/.test(password[i])) {
            otherSymbols += 1;
        }
    }

    if (otherSymbols > otherSymbolsRestrict) {
        error.push("Password must consist only of letters and digits")
    }
    if (digits < digitsLength ) {
        error.push("Password must have at least 2 digits")
    }



    if (error.length) {
        return error.join('\n')
    } else {
        return `Password is valid`
    }

}


console.log(solve('Pa$s$s'))