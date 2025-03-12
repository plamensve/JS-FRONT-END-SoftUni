function solve(info) {
    let objInfo = {}

    for (let x of info) {
        let [name, latitude, longitude] = x.split(' | ')
        objInfo['town'] = name;
        objInfo['latitude'] = Number(latitude).toFixed(2)
        objInfo['longitude'] = Number(longitude).toFixed(2)

        console.log(objInfo)
    }

}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)