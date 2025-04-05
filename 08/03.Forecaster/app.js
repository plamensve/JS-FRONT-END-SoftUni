let locationInput = document.getElementById('location');
let btn = document.getElementById('submit');
btn.addEventListener('click', attachEvents);

async function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/';
    const symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    };

    const forecastSection = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    // Изчистване на предишни резултати
    currentDiv.innerHTML = '<div class="label">Current conditions</div>';
    upcomingDiv.innerHTML = '<div class="label">Three-day forecast</div>';

    try {
        const locationName = locationInput.value;

        // 1. GET locations
        const res = await fetch(baseUrl + 'locations');
        const locations = await res.json();
        const location = locations.find(loc => loc.name === locationName);

        if (!location) throw new Error('Location not found');

        const code = location.code;

        // 2. GET current
        const todayRes = await fetch(baseUrl + `today/${code}`);
        const todayData = await todayRes.json();

        // 3. GET upcoming
        const upcomingRes = await fetch(baseUrl + `upcoming/${code}`);
        const upcomingData = await upcomingRes.json();

        forecastSection.style.display = 'block';

        // 🔹 Current Forecast
        const forecastsDiv = document.createElement('div');
        forecastsDiv.classList.add('forecasts');

        const symbolSpan = document.createElement('span');
        symbolSpan.classList.add('condition', 'symbol');
        symbolSpan.textContent = symbols[todayData.forecast.condition];

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('condition');

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('forecast-data');
        nameSpan.textContent = todayData.name;

        const tempSpan = document.createElement('span');
        tempSpan.classList.add('forecast-data');
        tempSpan.textContent = `${todayData.forecast.low}${symbols.Degrees}/${todayData.forecast.high}${symbols.Degrees}`;

        const condSpan = document.createElement('span');
        condSpan.classList.add('forecast-data');
        condSpan.textContent = todayData.forecast.condition;

        conditionSpan.appendChild(nameSpan);
        conditionSpan.appendChild(tempSpan);
        conditionSpan.appendChild(condSpan);

        forecastsDiv.appendChild(symbolSpan);
        forecastsDiv.appendChild(conditionSpan);
        currentDiv.appendChild(forecastsDiv);

        // 🔹 Upcoming Forecast
        const upcomingForecast = document.createElement('div');
        upcomingForecast.classList.add('forecast-info');

        upcomingData.forecast.forEach(day => {
            const upcomingSpan = document.createElement('span');
            upcomingSpan.classList.add('upcoming');

            const upSymbol = document.createElement('span');
            upSymbol.classList.add('symbol');
            upSymbol.textContent = symbols[day.condition];

            const upTemp = document.createElement('span');
            upTemp.classList.add('forecast-data');
            upTemp.textContent = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;

            const upCond = document.createElement('span');
            upCond.classList.add('forecast-data');
            upCond.textContent = day.condition;

            upcomingSpan.appendChild(upSymbol);
            upcomingSpan.appendChild(upTemp);
            upcomingSpan.appendChild(upCond);

            upcomingForecast.appendChild(upcomingSpan);
        });

        upcomingDiv.appendChild(upcomingForecast);

    } catch (error) {
        forecastSection.style.display = 'block';
        currentDiv.innerHTML = 'Error';
        upcomingDiv.innerHTML = '';
    }
}
