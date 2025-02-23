function reversedChars(param1, param2, param3) {
    let my_list = [param1, param2, param3]
    return my_list.reverse().join(" ")
}

console.log(reversedChars('a', 'b', 'c'))