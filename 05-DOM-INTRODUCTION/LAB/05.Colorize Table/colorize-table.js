function colorize() {
    let rows = document.querySelectorAll('tbody tr:nth-child(even)')

    for (let row of rows){
        row.style.backgroundColor = 'teal';
    }
}