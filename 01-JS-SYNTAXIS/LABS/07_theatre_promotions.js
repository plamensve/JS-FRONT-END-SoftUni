function theatrePromotions(day_of_the_week, age) {
    if (day_of_the_week === 'Weekday' && age >= 0 && age <= 18) {
        console.log(`12$`)
    } else if (day_of_the_week === 'Weekday' && age > 18 && age <= 64) {
        console.log(`18$`)
    } else if (day_of_the_week === 'Weekday' && age > 64 && age <= 122) {
        console.log('12$')
    } else if (day_of_the_week === 'Weekend' && age >= 0 && age <= 18) {
        console.log('15$')
    } else if (day_of_the_week === 'Weekend' && age > 18 && age <= 64) {
        console.log('20$')
    } else if (day_of_the_week === 'Weekend' && age > 64 && age <= 122) {
        console.log('15$')
    } else if (day_of_the_week === 'Holiday' && age >= 0 && age <= 18) {
        console.log('5$')
    } else if (day_of_the_week === 'Holiday' && age > 18 && age <= 64) {
        console.log('12$')
    } else if (day_of_the_week === 'Holiday' && age > 64 && age <= 122) {
        console.log('10$')
    } else {
        console.log('Error!')
    }
}

theatrePromotions('Holiday', 15)