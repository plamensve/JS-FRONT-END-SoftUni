function solve() {
   let matches = document.querySelectorAll('tbody tr')
   let inputString = document.getElementById('searchField').value;

   for (let row of matches) {
        row.classList.remove('select');
    }

   if (inputString === '') {
        return;
    }

   for (let x of matches){
       console.log(inputString)
       console.log(x.textContent)

       if (x.textContent.includes(inputString)){
           x.classList.add('select')
       }
   }

   document.getElementById('searchField').value = '';

}