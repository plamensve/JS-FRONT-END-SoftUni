function solve(arr) {
    let words = [...arr];

    let searchedWords = words.shift().split(' ');
    let wordCount = {};

    for (let w of searchedWords) {
        wordCount[w] = 0;
    }

    for (let word of words) {
        if (wordCount.hasOwnProperty(word)) {
            wordCount[word] += 1;
        }
    }

    let sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    return sortedWords.map(([word, count]) => `${word} - ${count}`).join('\n');
}

console.log(solve([
'is the',
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
))
