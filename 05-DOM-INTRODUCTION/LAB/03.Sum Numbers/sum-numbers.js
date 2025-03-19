function calc() {
    // read values in the input fields
    // sum the values
    // print result

    let input1 = document.getElementById('num1')
    let input2 = document.getElementById('num2')

    let a = Number(input1.value)
    let b = Number(input2.value)

    let sum = document.getElementById('sum')
    sum.value = a + b
}