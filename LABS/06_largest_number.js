function largestNumber (num1, num2, num3) {
    let num;

    if (num1 > num2 && num1 > num3) {
        num = num1;
    }

    else if ( num2 > num1 && num2 > num3) {
        num = num2;
    }

    else if ( num3 > num1 && num3 > num2) {
        num = num3;
    }

    console.log(`The largest number is ${num}.`)
}

largestNumber(5, -3, 16)