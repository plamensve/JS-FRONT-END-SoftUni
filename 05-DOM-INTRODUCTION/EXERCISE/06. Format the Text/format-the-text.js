function solve() {
    let textInput = document.getElementById('input');
    let sentences = textInput.value
        .split('.')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    let outputText = document.getElementById('output');
    outputText.innerHTML = '';

    let temp = [];

    for (let sentence of sentences) {
        temp.push(sentence);

        if (temp.length === 3) {
            let paragraph = document.createElement('p');
            paragraph.textContent = temp.join('. ') + '.';
            outputText.appendChild(paragraph);
            temp = [];
        }
    }

    // Ако останат 1-2 изречения накрая
    if (temp.length > 0) {
        let paragraph = document.createElement('p');
        paragraph.textContent = temp.join('. ') + '.';
        outputText.appendChild(paragraph);
    }
}
