function solve() {
    function processSingleRestaurant(restStr) {
        const [restaurantName, workers] = restStr.split(' - ');

        const restaurant = {
            'name': restaurantName,
            'workers': [],
        };
        for (const w of workers.split(', ')) {
            const [name, salary] = w.split(' ');
            restaurant.workers.push({name, salary: Number(salary)});
        }
        return restaurant;
    }



    function calculateAvg(rest) {
        let total = 0;
        for (const n of rest) {
            total += n.salary;
        }

        return total / rest.length;
    }


    function findBestRestaurant(restaurants) {
        let bestRestaurantName = '';
        let bestAvg = -Infinity;

        for (const [name, data] of Object.entries(restaurants)) {
            if (data.avgSalary > bestAvg) {
                bestRestaurantName = name;
                bestAvg = data.avgSalary;
            }
        }

        return bestRestaurantName;
    }



    function formatResult(name, data) {
        const bestRestaurant = document.querySelector('#bestRestaurant p');
        const workersP = document.querySelector('#workers p');

        const workers = data.workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`)

        workersP.textContent = workers.join(' ');
        bestRestaurant.textContent = `Name: ${name} Average Salary: ${data.avgSalary.toFixed(2)} Best Salary: ${data.workers[0].salary.toFixed(2)}`;
    }


    const input = JSON.parse(document.querySelector('#inputs textarea').value);
    let bestRestaurant = '';

    let restaurants = {};
    for (const row of input) {
        const restaurant = processSingleRestaurant(row);
        if (!restaurants[restaurant.name]) {
            restaurants[restaurant.name] = {'workers': []};

        }
        restaurants[restaurant.name].workers.push(...restaurant.workers);
        restaurants[restaurant.name].avgSalary = Number(calculateAvg(restaurants[restaurant.name].workers));
    }

    bestRestaurant = findBestRestaurant(restaurants);
    restaurants[bestRestaurant].workers.sort((a, b) => b.salary - a.salary);

    formatResult(bestRestaurant, restaurants[bestRestaurant]);
}