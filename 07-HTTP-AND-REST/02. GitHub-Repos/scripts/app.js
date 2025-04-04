let btn = document.querySelector('button')
btn.addEventListener('click', loadRepos)


function loadRepos() {
    fetch('https://api.github.com/users/plamensve/repos', {
        headers: {
            'Authorization': 'token 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'
        }
    })
        .then(onResponse)
        .then(onData)
        .catch(onError);


    function onResponse(response){
        if (!response.ok){
            throw new Error('Something went wrong')
        }

        return response.text();
    }
    function onData(data){
        let output = document.getElementById('res')
        output.textContent = data;
    }

    function onError(error){
        let output = document.getElementById('res')
        output.textContent = error;
    }
}


