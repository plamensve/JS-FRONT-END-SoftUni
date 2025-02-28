function solve(arr){
    let regex = /#[A-Za-z]+/g;
    let matches = arr.match(regex) || [];
    let cleanedWords = matches.map(word => word.slice(1));

    console.log(cleanedWords.join("\n"))
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')