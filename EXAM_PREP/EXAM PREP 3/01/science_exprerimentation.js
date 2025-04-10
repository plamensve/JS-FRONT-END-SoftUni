function solve(information){
    const maxQuantity = 500
    let numberOfChemicals = Number(information.shift());
    let chemicals = {};
    let chemicalsFormula = {};

    for (let i = 0; i < numberOfChemicals; i++){
        let [name, quantity] = information[i].split(' # ');
        chemicals[name] = Number(quantity)
    }

    for (let i = numberOfChemicals; i < information.length; i++){
        let command = information[i].split(' # ')
        if (command[0] === 'Mix'){
            if (chemicals[command[1]] >= Number(command[3])  && chemicals[command[2]] >= Number(command[3])){
                chemicals[command[1]] -= Number(command[3])
                chemicals[command[2]] -= Number(command[3])
                 console.log(`${command[1]} and ${command[2]} have been mixed. ${command[3]} units of each were used.`)
            } else {
                console.log(`Insufficient quantity of ${command[1]}/${command[2]} to mix.`)
            }
        } else if (command[0] === 'Replenish'){
            if (!chemicals.hasOwnProperty(command[1])){
                console.log(`The Chemical ${command[1]} is not available in the lab.`)
            } else if (chemicals[command[1]] + Number(command[2]) >= maxQuantity){
                let currentQuantityMissed = maxQuantity - chemicals[command[1]]
                chemicals[command[1]] = maxQuantity;
                console.log(`${command[1]} quantity increased by ${currentQuantityMissed} units, reaching maximum capacity of 500 units!`)
            } else {
                chemicals[command[1]] += Number(command[2]);
                console.log(`${command[1]} quantity increased by ${command[2]} units!`)
            }
        } else if (command[0] === 'Add Formula'){
            if (chemicals.hasOwnProperty(command[1])){
                chemicalsFormula[command[1]] = command[2];
                console.log(`${command[1]} has been assigned the formula ${command[2]}.`)
            } else {
                console.log(`The Chemical ${command[1]} is not available in the lab.`)
            }
        } else if (command[0] === 'End'){
            for (let [key, value] of Object.entries(chemicals)){
                if (chemicalsFormula.hasOwnProperty(key)){
                    console.log(`Chemical: ${key}, Quantity: ${value}, Formula: ${chemicalsFormula[key]}`)
                } else {
                    console.log(`Chemical: ${key}, Quantity: ${value}`)
                }
            }
        }

    }
}

// solve([ '4',
//   'Water # 200',
//   'Salt # 100',
//   'Acid # 50',
//   'Base # 80',
//   'Mix # Water # Salt # 50',
//   'Replenish # Salt # 150',
//   'Add Formula # Acid # H2SO4',
//   'End']
// )

// solve(
//     [ '3',
//   'Sodium # 300',
//   'Chlorine # 100',
//   'Hydrogen # 200',
//   'Mix # Sodium # Chlorine # 200',
//   'Replenish # Sodium # 250',
//   'Add Formula # Sulfuric Acid # H2SO4',
//   'Add Formula # Sodium # Na',
//   'Mix # Hydrogen # Chlorine # 50',
//   'End']
//
// )