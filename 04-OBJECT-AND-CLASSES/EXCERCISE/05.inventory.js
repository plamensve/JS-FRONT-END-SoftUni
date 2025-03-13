function solve(heroes) {
    let result = []

    for (let x of heroes) {
        let [name, level, weapon] = x.split(' / ');
        level = Number(level);

        result.push({name: name, level: level, weapon: weapon})
    }

    result.sort((a, b) => a.level - b.level);

    let stringInfo = []
    for (let x of result){
        stringInfo.push(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.weapon}`)
    }
    return stringInfo.join('\n')
}

console.log(solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])
)