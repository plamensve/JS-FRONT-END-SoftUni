function solve(str, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'g');
    let matches = str.match(regex);

    console.log(matches ? matches.length : 0);
}

solve('This is a word and it also is a sentence', 'is')
solve('softuni is great place for learning new programming languages', 'softuni')