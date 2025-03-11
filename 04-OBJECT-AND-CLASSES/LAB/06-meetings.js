function solve(meetings) {
    let schedule = {};
    let result = []

    for (let m of meetings) {
        let [day, name] = m.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`)
        }

    }

    for (let [x, y] of Object.entries(schedule)) {
        result.push(`${x} -> ${y}`)
    }

    return result.join('\n')
}

console.log(solve(
    [
 'Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'
    ]
)
)

