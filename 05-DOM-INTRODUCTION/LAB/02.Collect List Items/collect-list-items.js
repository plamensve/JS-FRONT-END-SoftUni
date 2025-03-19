function extractText(element) {
    let extractedEl = document.getElementById('items')
    let textArea = document.getElementById('result')

    textArea.textContent += extractedEl.textContent
}

function addText() {
    let extractedEl = document.getElementById('items')
    let textArea = document.getElementById('result')

    let items = extractedEl.children;
    let result = [];

    for (let li of items){
        result.push(li.textContent)
    }


    textArea.value = result.join('\n')
}