class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }



    addProduct (product) {
        if (this.capacity - product.quantity >= 0) {
            this.storage.push({name: product.name, price: product.price, quantity: product.quantity})
            this.capacity -= product.quantity
            this.totalCost += product.price * product.quantity
        } else {
            this.storage.push({name: product.name, price: product.price, quantity: this.capacity})
            this.capacity -= this.capacity
            this.totalCost += product.price * this.capacity
        }
    }


    getProducts () {
        let result = []
        for (let x of this.storage) {
            result.push(JSON.stringify(x))
        }

        return result.join('\n')
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);


