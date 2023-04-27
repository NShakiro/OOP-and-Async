export default class Sandwich {

    constructor(topping) {
        this.bread = 'white'
        this.cheese = 'swiss'
        this.topping = topping
        this.sandwichName = ''
    }

    //
    setSandwichName() {
        if (this.topping == 'salmon') {
            this.sandwichName = 'Salmon Sandwich'
        }
        else if (this.topping == 'pepperoni') {
            this.sandwichName = 'Pepperoni Sandwich'
        }
        else if (this.topping == 'turkey') {
            this.sandwichName = 'Turkey Sandwich'
        }
        return this.sandwichName
    }

    showSandwichChoice() {
        if (this.topping == 'salmon') {
            console.log(`You choosed ` + this.setSandwichName())
        }
        else if (this.topping == 'pepperoni') {
            console.log(`You choosed ` + this.setSandwichName())
        }
        else if (this.topping == 'turkey') {
            console.log(`You choosed ` + this.setSandwichName())
        }
    }


}


