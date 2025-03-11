function solve(arrInfo) {

    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let i of arrInfo){
        let [name, age] = i.split(' ')
        let myCat = new Cats(name, age)
        myCat.meow()
    }
}

solve(['Candy 1', 'Poppy 3', 'Nyx 2'])