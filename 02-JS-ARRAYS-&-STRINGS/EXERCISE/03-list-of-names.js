function solve(arr) {
    let result = arr.sort((a, b) => a.localeCompare(b))
                   .map((name, index) => `${index + 1}.${name}`);

    console.log(result.join("\n"));
}

solve(["John", "Bob", "Christina", "Ema"]);


