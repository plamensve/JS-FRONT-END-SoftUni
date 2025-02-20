function studentInformation (name, age, avg_grade) {
    return `Name: ${name}, Age: ${age}, Grade: ${avg_grade.toFixed(2)}`
}

result = studentInformation('John', 15, 5.54678)
console.log(result)