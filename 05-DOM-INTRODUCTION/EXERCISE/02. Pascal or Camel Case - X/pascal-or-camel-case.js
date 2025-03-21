function solve() {
  let convertedString = Array.from(document.getElementById('text').value.toLowerCase().split(' '))
  let convertor = document.getElementById('naming-convention').value;

  let result = '';

  if (convertor === 'Pascal Case'){
      for (let word of convertedString){
      result += word[0].toUpperCase() + word.slice(1)
    }
  } else if (convertor === 'Camel Case')  {
      result += convertedString[0];
      for (let i = 1; i < convertedString.length; i++){
          result += convertedString[i][0].toUpperCase() + convertedString[i].slice(1)
      }
  } else {
      result += 'Error!'
  }

  document.getElementById('result').textContent = result

}