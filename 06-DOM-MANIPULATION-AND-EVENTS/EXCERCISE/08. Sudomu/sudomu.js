document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let table = document.querySelectorAll('tbody tr')
    let checkBtn = document.querySelector('[type="submit"]')

    checkBtn.addEventListener('click', onCheck)

    function onCheck(event){
        event.preventDefault()


        let matrix = [];
        let flag = true;

        for (let row of table){
            let rowInMatrix = [];
            let cells = row.querySelectorAll('td')

            for (let cell of cells){
                let input = cell.querySelector('input')
                rowInMatrix.push(input.value)
            }
            matrix.push(rowInMatrix)
        }

        let col_0 = new Set()
        let col_1 = new Set()
        let col_2 = new Set()
        for (let i = 0; i < matrix.length; i++){
            for (let y = 0; y < matrix[i].length; y++) {
                if (y === 0){
                    col_0.add(matrix[i][y])
                } else if (y === 1){
                    col_1.add(matrix[i][y])
                } else if (y === 2){
                    col_2.add(matrix[i][y])
                }
            }
        }

        if (col_0.size < 3 || col_1.size < 3 || col_2 < 3){
            flag = false;
        }


        for (let i = 0; i < matrix.length; i++){
            let rowSet = new Set()
            for (let z = 0; z < matrix[i].length; z++){
                rowSet.add(matrix[i][z])
            }
            if (rowSet.size < 3){
                flag = false;
                break;
            }
        }

        let resultText = document.getElementById('check')
        let borderTbody = document.querySelector('table')
        if (flag === false){
            resultText.textContent = 'Keep trying ...'
            borderTbody.style.border = "2px solid red";
        } else {
            resultText.textContent = 'Success!'
            borderTbody.style.border = "2px solid green";
        }
    }
}