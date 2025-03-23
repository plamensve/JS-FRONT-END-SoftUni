function solve() {
    let info = document.querySelectorAll('textarea')

    let workers = [];
    for (let x of info){
        let pattern = /"([^"]*)"/g;
        let matches = x.value.match(pattern);
        if (matches) {
            workers.push(...matches.map(match => match.replace(/"/g, '')));
        }
    }

    let salary = {};
    for (let x of workers) {
        let [restaurantName, workersStr] = x.split(' - ');
        let workersArr = workersStr.split(', ');

        if (!salary.hasOwnProperty(restaurantName)){
            salary[restaurantName] = {};
        }

        for (let worker of workersArr) {
            let [name, sal] = worker.split(' ');
            salary[restaurantName][name] = Number(sal);
        }
    }

    let bestRestaurantName = '';
    let avgSalaryOfBestRestaurant = 0;
    let maxSalary = 0;
    let outputWorkers = {};

    for (let [name, workers] of Object.entries(salary)) {
        let salaries = Object.values(workers);
        let avgSalary = salaries.reduce((a, b) => a + b, 0) / salaries.length;
        let currMaxSalary = Math.max(...salaries);

        if (avgSalary > avgSalaryOfBestRestaurant) {
            bestRestaurantName = name;
            avgSalaryOfBestRestaurant = avgSalary;
            maxSalary = currMaxSalary;
            outputWorkers = workers;
        }
    }

    let sortedWorkers = Object.entries(outputWorkers)
        .sort((a, b) => b[1] - a[1]);

    let result = sortedWorkers
        .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
        .join(' ');

    // ВАЖНО: пишем в <p>, не в <span>
    let bestRest = document.getElementById('bestRestaurant');
    bestRest.querySelector('p').textContent =
        `Name: ${bestRestaurantName} Average Salary: ${avgSalaryOfBestRestaurant.toFixed(2)} Best Salary: ${maxSalary.toFixed(2)}`;

    let bestRestWorkers = document.getElementById('workers');
    bestRestWorkers.querySelector('p').textContent = result;
}
