function solve(string) {
    let wordLlist = string.split(' ').map(w => w.toLowerCase());
    let objWordList = {}

    for (let w of wordLlist){
        if (objWordList.hasOwnProperty(w)){
            objWordList[w] += 1;
        } else {
            objWordList[w] = 1;
        }
    }

    let result = new Set();
    for (let [key, value] of Object.entries(objWordList)) {
        if (value % 2 !== 0) {
            result.add(key)
        }
    }

    return [...result].join(' ');
}

console.log(solve('Cake IS SWEET is Soft CAKE sweet Food'))