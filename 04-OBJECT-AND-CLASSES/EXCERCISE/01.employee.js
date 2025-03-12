function solve(listNames){
    let objNames = {}
    let resultString = []

    for (let name of listNames){
        objNames[name] = name.length
    }

    for (let x of Object.keys(objNames)){
        resultString.push(`Name: ${x} -- Personal Number: ${objNames[x]}`)
    }

    return resultString.join('\n')
}



console.log(solve([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
))