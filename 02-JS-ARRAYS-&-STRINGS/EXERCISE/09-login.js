function solve(info) {
    let username = info.shift()
    let counter = 0

    for (let i = 0; i < info.length; i++) {


        let reversed_string = info[i].split('').reverse().join('')
        if (reversed_string === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            counter++;

            if (counter === 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`)
            }

        }
    }

}

solve(['Acer', 'login', 'go', 'let me in', 'recA'])
solve(['momo', 'omom'])
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])