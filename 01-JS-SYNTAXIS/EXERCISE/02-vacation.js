function vacation(group_of_people, type_of_group, day_of_the_week) {
    let prices = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46
        },

        "Business": {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16,
        },

        "Regular": {
            "Friday": 15,
            "Saturday": 20,
            "Sunday": 22.50
        }

    }

     let ticket_price = prices[type_of_group][day_of_the_week];


    if (group_of_people >= 100 && type_of_group === "Business") {
        group_of_people -= 10;
    }

    let total_price = ticket_price * group_of_people;

    if (group_of_people >= 30 && type_of_group === "Students") {
        total_price *= 0.85;
    } else if (group_of_people >= 10 && group_of_people <= 20 && type_of_group === "Regular") {
        total_price *= 0.95;
    }

    return `Total price: ${total_price.toFixed(2)}`;

}

console.log(vacation(30,

"Students",

"Sunday"))






















