function solve(information){
    let mainString = information.shift();

    while (information[0] !== 'End'){
        let command = information.shift();

        if (command === 'RemoveEven'){
            let result = '';
            for (let i = 0; i < mainString.length; i++) {
                if (i % 2 === 0) {
                    result += mainString[i];
                }
            }
            mainString = result;
            console.log(mainString);

        } else if (command.startsWith('TakePart')) {
            let [_, fromIndex, toIndex] = command.split('!');
            fromIndex = Number(fromIndex);
            toIndex = Number(toIndex);
            mainString = mainString.slice(fromIndex, toIndex);
            console.log(mainString);

        } else if (command.startsWith('Reverse')) {
            let [_, substr] = command.split('!');
            if (mainString.includes(substr)) {
                let startIndex = mainString.indexOf(substr);
                let before = mainString.slice(0, startIndex);
                let after = mainString.slice(startIndex + substr.length);
                let reversed = substr.split('').reverse().join('');
                mainString = before + after + reversed;
                console.log(mainString);
            } else {
                console.log("Error");
            }
        }
    }
    console.log(`The concealed spell is: ${mainString}`)
}


solve((["asAsl2adkda2mdaczsa",
"RemoveEven",
"TakePart!1!9",
"Reverse!maz",
"End"])
)