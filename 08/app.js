// function postData(){
//
//    let url = 'http://localhost:3030/jsonstore/demo'
//    let options = {
//        method: 'post',
//        headers: { 'Content-Type': 'application/json'},
//        body: JSON.stringify({
//            msg: 'Hello, Again serviceеее!'
//        })
//    }
//
//     fetch(url, options)
//         .then(onResponse)
//         .then(onData)
//         .catch(onError);
//
//         function onResponse(response){
//             if (!response.ok) {
//                 throw new Error('HTTP error' + response.status);
//             }
//             return response.json()
//         }
//
//         function onData(data){
//             console.log(data)
//         }
//
//         function onError(error){
//             console.log(error)
//         }
//
// }

async function postData() {

    let url = 'http://localhost:3030/jsonstore/demo'
    let options = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            msg: 'Hello, Again serviceеее!'
        })
    }

   try {
       let response = await fetch(url, options);
       let data = response.json();
       console.log(data)
   } catch (error){
        console.log(error)
   }

}


// function getData() {
//
//     let url = 'http://localhost:3030/jsonstore/demo'
//
//
//     fetch(url)
//         .then(onResponse)
//         .then(onData)
//         .catch(onError);
//
//     function onResponse(response) {
//         return response.json()
//     }
//
//     function onData(data) {
//         console.log(data)
//     }
//
//     function onError(error) {
//         console.log(error)
//     }
//
// }

async function getData() {

    let url = 'http://localhost:3030/jsonstore/demo'

    try {
        let response = await fetch(url);
        let data = response.json();
        console.log(data);
    } catch (error){
        console.log(error)
    }

}