function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        console.log((n + ' ').repeat(n).trim());
    }
}

printMatrix(5)