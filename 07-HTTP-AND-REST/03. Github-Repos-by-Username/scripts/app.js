function loadRepos() {
    let btn = document.querySelector('button');
    btn.addEventListener('click', loadRepos)
    let user = document.getElementById('username').value;

    fetch(`https://api.github.com/users/${user}/repos`, {

    })
        .then(onResponse)
        .then(onData)
        .catch(onError);

    function onResponse(response){
        if (!response.ok){
            throw new Error('Request error' + response.status);
        }

        return response.json();
    }
    function onData(data){
        let output = document.getElementById('repos');
        output.replaceChildren();
        for (let repo of data){
            let newLi = document.createElement('li');
            let a = document.createElement('a');
            a.href = repo.html_url
            a.textContent = `${repo.name}/${user}`

            newLi.appendChild(a);
            output.appendChild(newLi);
        }

    }

    function onError(error){
        console.log(error)
    }
}


