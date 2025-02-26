function solve(str, word) {
    return str.replaceAll(word, '*'.repeat(word.length))
}

console.log(solve('A small sentence with some words', 'small'))
console.log(solve('Find the hidden word', 'hidden'))