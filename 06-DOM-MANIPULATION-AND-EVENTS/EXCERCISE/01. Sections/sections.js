document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let stringElements = Array.from(document.querySelectorAll('input:first-child'))
   let generateBtn = document.querySelector('input:last-child')

   generateBtn.addEventListener('click', solve)

   function solve(event){
       event.preventDefault()

       let result = [];
       for (let x of stringElements){
           let z = x.value.split(', ')
           result.push(z)
       }

       for (let x of result[0]) {
           let div = document.createElement('div');
           let p = document.createElement('p');

           p.textContent = x;
           div.appendChild(p)

           let parentDiv = document.getElementById('content')
           parentDiv.appendChild(div)
       }
   }
}