function solve(string) {
    let words = string.match(/[A-Z][a-z]*/g);
    console.log(words.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')