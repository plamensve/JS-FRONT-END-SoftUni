function solve(arr, n) {
    let myArr = [];
    for (let i = 0; i < arr.length; i += n) {
        myArr.push(arr[i]);
    }
    return myArr;
}



console.log(solve(['5', '20', '31', '4', '20'], 2))

console.log(solve(['dsa', 'asd', 'test', 'tset'], 2))