function solve(word, main_string) {
    let mainArr = word.split(',');
    let tokens = main_string.split(' ');

    for (let i = 0; i < tokens.length; i++) {
        for (let x of mainArr) {
            if (tokens[i].includes('*') && tokens[i].length === x.length) {
                tokens[i] = x;
            }
        }
    }

    console.log(tokens.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');
