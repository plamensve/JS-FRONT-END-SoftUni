function solve() {
    let inputNumber = document.getElementById('input');
    let numberToConvert = Number(inputNumber.value);

    let option = document.getElementById('selectMenuTo');
    let convertor = option.value;

    let result = '';

    if (convertor === 'binary') {
        result = numberToConvert.toString(2);
    } else if (convertor === 'hexadecimal') {
        result = numberToConvert.toString(16).toUpperCase();
    }

    let resultNumber = document.getElementById('result');
    resultNumber.value = result;
}
