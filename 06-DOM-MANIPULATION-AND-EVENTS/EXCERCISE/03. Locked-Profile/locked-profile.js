document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let btn = document.querySelectorAll('button')
    for (let x of btn) {
        x.addEventListener('click', showMore)
    }

    function showMore(event) {
        event.preventDefault()
        let clickedBtn = event.target

        let profileDiv = clickedBtn.closest('.profile');
        let radioGroup = profileDiv.querySelector('.radio-group');
        let inputs = radioGroup.querySelectorAll('input');

        if (inputs[0].checked) {
            return;
        }

        if (clickedBtn.textContent === 'Show more') {
            let sibling = clickedBtn.previousElementSibling;
            sibling.style.display = 'block';
            clickedBtn.textContent = 'Show less'

        } else if (clickedBtn.textContent === 'Show less'){
            let sibling = clickedBtn.previousElementSibling;
            sibling.style.display = 'none';
            clickedBtn.textContent = 'Show more'
        }
    }
}