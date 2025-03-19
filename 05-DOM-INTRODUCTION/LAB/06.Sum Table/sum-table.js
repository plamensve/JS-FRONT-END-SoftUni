function sumTable() {

    let rows= Array.from(document.querySelectorAll('table tr'))
    rows.shift();
    let output = rows.pop();

    let sum = 0;

    for (let row of rows) {
        sum += Number(row.children[row.children.length - 1].textContent)
    }

   let outputCol = output.children[output.children.length - 1];
    outputCol.textContent = sum
}