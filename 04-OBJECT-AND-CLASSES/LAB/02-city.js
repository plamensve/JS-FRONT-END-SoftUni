function solve(obj) {
  let infoKeys = []
  let result = []
  infoKeys.push(Object.keys(obj))
  infoKeys.push(Object.values(obj))

  for (let i = 0; i < infoKeys[0].length; i++) {
      result.push(`${infoKeys[0][i]} -> ${infoKeys[1][i]}`)
  }

  return result.join('\n')
}

console.log(solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
    test: 6
    }
    )
)