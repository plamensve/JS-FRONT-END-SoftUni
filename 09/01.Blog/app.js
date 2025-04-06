let loadPostBtn = document.getElementById('btnLoadPosts')
loadPostBtn.addEventListener('click', attachEvents)

let viewPostBtn = document.getElementById('btnViewPost')
viewPostBtn.addEventListener('click', viewPosts)

async function attachEvents() {
    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts'
    let postRes =  await fetch(postsUrl)
    let postsData = await postRes.json()

    let allPosts = document.getElementById('posts')
    for (let post of Object.entries(postsData)){
        let option = document.createElement('option')
        option.value = post[1].id
        option.textContent = post[1].title
        allPosts.appendChild(option)
    }

}

async function viewPosts(){

    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'
    let commentsRes = await fetch(commentsUrl)
    let commentsData = await commentsRes.json()
    let selectedId = document.getElementById('posts').value;
    let current_title = document.querySelector(`option[value="${selectedId}"]`);

    let title = document.getElementById('post-title')
    title.textContent = current_title.textContent

    let allComments = document.getElementById('post-comments')
    allComments.replaceChildren();
    for (let c of Object.values(commentsData)){
        if (c.postId === selectedId){
            let newLi = document.createElement('li')
            newLi.textContent = c.text
            allComments.appendChild(newLi)
        }
    }

    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts'
    let postRes =  await fetch(postsUrl)
    let postsData = await postRes.json()
    for (let post of Object.entries(postsData)){
        if (post[0] === selectedId){
            let p = document.getElementById('post-body')
            p.textContent = post[1].body
        }
    }

}

// attachEvents();