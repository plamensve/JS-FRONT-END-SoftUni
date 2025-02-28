function solve(word, string) {
    let regex = new RegExp(`\\b${word}\\b`, "i");
    let result = string.match(regex);
    console.log(result ? word : `${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language')
