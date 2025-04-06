function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSubmit)
    document.getElementById('refresh').addEventListener('click', onRefresh)
}

async function getAllMessages(){
    let url = 'http://localhost:3030/jsonstore/messenger'
    let res = await fetch(url)
    let data = await res.json()

    return Object.values(data);
}

async function onSubmit(){
    let authorInput = document.querySelector('[name="author"]')
    let contentInput = document.querySelector('[name="content"]')

    let author = authorInput.value;
    let content = contentInput.value;

    await postMsg(author, content)

    authorInput.value = '';
    contentInput.value = '';
}

async function onRefresh(){
    let allMsg = await getAllMessages()

    let textArea = document.getElementById('messages')
    textArea.textContent = '';

    let lines = [];
    for (let msg of allMsg){
        lines.push(`${msg.author}: ${msg.content}`)
    }
    textArea.textContent = lines.join('\n');
}

async function postMsg(author, content){
    let message = {author, content};
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    };

    await fetch('http://localhost:3030/jsonstore/messenger', options);
}

attachEvents();