import Sandwich from "./Sandwich.js"

export default class SandwichOrder extends Sandwich {
    constructor(orderNumber, topping) {
        super(topping)
        this.orderNumber = orderNumber
        this.price = 10
    }

    //show ingredients to customer
    showSandwichIngredients() {
        console.log(`Yours sandwich ingredients are:\n ${this.bread} bread\n ${this.cheese} cheese\n topping - ${this.topping}`)
    }

    setSandwichPrice() {
        if (this.topping == "salmon") this.price = 15
        return this.price
    }

    //show price to customer
    showSandwichPrice() {
        console.log(`${this.setSandwichName()}, price is: $` + this.setSandwichPrice())
    }

}

//
