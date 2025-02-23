function driving(current_speed, area) {
    let speed_limit = {
    "motorway" : 130,
    "interstate": 90,
    "city": 50,
    "residential": 20
}

    let speed_diff = current_speed - speed_limit[area]
    let status = ""

    if (speed_diff <= 20) {
        status = "speeding"
    } else if (speed_diff <= 40) {
        status = "excessive speeding"
    } else if (speed_diff > 40) {
        status = "reckless driving"
    } else {
        speed_diff = ""
    }

    if (current_speed <= speed_limit[area]) {
        return `Driving ${current_speed} km/h in a ${speed_limit[area]} zone`
    } else {
        return `The speed is ${current_speed - speed_limit[area]} km/h faster than the allowed speed of ${speed_limit[area]} - ${status}`
    }

}

console.log(driving(200, 'motorway'))