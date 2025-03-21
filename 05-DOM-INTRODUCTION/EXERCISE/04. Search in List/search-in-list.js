function solve() {
   let cities = document.querySelectorAll('ul li')
   let searchText = document.getElementById('searchText').value
   let counter = 0;

   for (let x of cities){

        if (x.textContent.includes(searchText)) {
            x.style.fontWeight = 'bold';
            x.style.textDecoration = 'underline';
            counter += 1;
        }
    }

   document.getElementById('result').textContent = `${counter} matches found`

}