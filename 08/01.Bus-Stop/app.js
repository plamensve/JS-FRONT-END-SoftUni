async function getInfo() {
    let busId = document.getElementById('stopId').value
    let url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`

    try{
        let response = await fetch(url);
        let data = await response.json();
        let stopName = document.getElementById('stopName')
        stopName.textContent = data.name

        document.getElementById('buses').textContent = ''
        let buses = document.getElementById('buses')


        for (let [busId, time] of Object.entries(data.buses)){
            let li = document.createElement('li')
            li.textContent = `Bus ${busId} arrives in ${time} minutes`
            buses.appendChild(li)
        }

    }catch (error){
        document.getElementById('stopName').textContent = 'Error'
    }
}