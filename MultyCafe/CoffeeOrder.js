import Coffee from "./Coffee.js"


class CoffeeOrder extends Coffee {
    //orderNumber may generated with function, for now we only set it's manually
    constructor(orderNumber, coffeeName, cupSize, isSweet) {
        super(coffeeName, isSweet)
        this.orderNumber = orderNumber
        this.cupSize = cupSize
        this.price = 5

    }

    //this function will set the price accordingly to cup size 
    setCoffeePrice() {
        if (this.cupSize == 'medium') {
            this.price = 7.5
        }
        else if (this.cupSize == 'big') {
            this.price = 10
        }
        return this.price
    }

    //this function will show for customer the price accordingly to cup size 
    showCoffeePrice() {
        let price = this.setCoffeePrice()
        console.log(`${this.coffeeName}, size ${this.cupSize}, price is: $${price}`)
    }

}

export default CoffeeOrder