function solve(information) {
    let numberOfSuperheros = Number(information.shift());
    let maxEnergy = 100;
    let heroEnergy = {};
    let heroMagic = {};

    // Създаване на герои
    for (let i = 0; i < numberOfSuperheros; i++) {
        let [name, powersStr, energy] = information[i].split('-');
        heroEnergy[name] = Number(energy);
        heroMagic[name] = powersStr.split(',').map(p => p.trim());
    }

    for (let i = numberOfSuperheros; i < information.length; i++) {
        let command = information[i].split(' * ');

        if (command[0] === 'Use Power') {
            let [_, name, power, requiredEnergy] = command;
            requiredEnergy = Number(requiredEnergy);

            if (!heroMagic[name].includes(power) || heroEnergy[name] < requiredEnergy) {
                console.log(`${name} is unable to use ${power} or lacks energy!`);
            } else {
                heroEnergy[name] -= requiredEnergy;
                console.log(`${name} has used ${power} and now has ${heroEnergy[name]} energy!`);
            }

        } else if (command[0] === 'Train') {
            let [_, name, gain] = command;
            gain = Number(gain);

            if (heroEnergy[name] === maxEnergy) {
                console.log(`${name} is already at full energy!`);
            } else {
                let actualGain = Math.min(maxEnergy - heroEnergy[name], gain);
                heroEnergy[name] += actualGain;
                console.log(`${name} has trained and gained ${actualGain} energy!`);
            }

        } else if (command[0] === 'Learn') {
            let [_, name, newPower] = command;

            if (heroMagic[name].includes(newPower)) {
                console.log(`${name} already knows ${newPower}.`);
            } else {
                heroMagic[name].push(newPower);
                console.log(`${name} has learned ${newPower}!`);
            }

        } else if (command[0] === 'Evil Defeated!') {
            for (let name of Object.keys(heroMagic)) {
                console.log(`Superhero: ${name}`);
                console.log(`- Superpowers: ${heroMagic[name].join(', ')}`);
                console.log(`- Energy: ${heroEnergy[name]}`);
            }
        }
    }
}


// solve([
//     "3",
//     "Iron Man-Repulsor Beams,Flight-80",
//     "Thor-Lightning Strike,Hammer Throw-10",
//     "Hulk-Super Strength-60",
//     "Use Power * Iron Man * Flight * 30",
//     "Train * Thor * 20",
//     "Train * Hulk * 50",
//     "Learn * Hulk * Thunderclap",
//     "Use Power * Hulk * Thunderclap * 70",
//     "Evil Defeated!"
// ])

solve(
     ([
    "2",
    "Iron Man-Repulsor Beams,Flight-20",
    "Thor-Lightning Strike,Hammer Throw-100",
    "Train * Thor * 20",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
])

)

// solve(
//      ([
//     "2",
//     "Iron Man-Repulsor Beams,Flight-100",
//     "Thor-Lightning Strike,Hammer Throw-50",
//     "Train * Thor * 20",
//     "Learn * Thor * Hammer Throw",
//     "Use Power * Iron Man * Repulsor Beams * 30",
//     "Evil Defeated!"
// ])
//
// )