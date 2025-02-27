function solve(arr, n) {
    let myArr = [];
    for (let i = 0; i < arr.length; i += n) {
        myArr.push(arr[i]);
    }
    return myArr;
}



console.log(solve(['1', '2', '3', '4', '5'], 6))

console.log(solve(['dsa', 'asd', 'test', 'tset'], 2))