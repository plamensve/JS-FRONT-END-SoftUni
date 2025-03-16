function solve (arr) {

    let garage = new Set()
    for (let g of arr){
        let [command, regNum] = g.split(', ')
        if (command === 'IN') {
            garage.add(regNum)
        } else if (command === 'OUT') {
            garage.delete(regNum)
        }
    }

    return garage.size > 0 ? [...garage].sort().join('\n') : 'Parking Lot is Empty';
}

console.log(solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
))