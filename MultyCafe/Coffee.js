
const latte = "Latte"
const icedCoffee = 'Iced Coffee'
const cappuccino = "Cappuccino"

export default class Coffee {
    constructor(coffeeName, isSweet) {
        //drinkName
        this.coffeeName = coffeeName
        //beans name
        this.coffeeType = 'arabica'   // by default
        this.water = 'hot water'  // by default
        this.milk = 'whole milk'  // by default
        this.isSweet = isSweet    // by default

    }
    //cupSize=?
    getCoffeeName(coffeeName) {
        this.coffeeName = coffeeName
        return coffeeName
    }

    setSweet() {
        if (this.isSweet == 'sweet')
            return true
        else return false
    }


    /**
     * This function will set appropiate coffee recipe
     * CoffeeType - to enter the coffeeType that customer orders
     * @returns coffeeRecipe
     */
    setCoffeeRecipe() {
        let coffeeRecipe = `Coffee order is ${this.coffeeName}, bellow is its recipe:\n1.  Make a shot of ${this.coffeeType} coffee.\n2.Pour ${this.water} in a cup with coffee.\n3.Pour ${this.milk} in a cup of coffee.\n3.Stir well.\n`

        if (this.coffeeName == icedCoffee) {
            this.water = 'iced water'
        }
        else if (this.coffeeName == cappuccino) {
            this.milk = 'almond milk'
        }
        
        if (this.setSweet() == true) {
            coffeeRecipe = `Coffee order is ${this.coffeeName}, bellow is it's recipe:\n1.Make a shot of ${this.coffeeType}.\n2.Pour ${this.water} in a cup with coffee\n3.Pour ${this.milk} in a cup of coffee.\n3. Add a spoon of sugar.\n4.Stir well\n`
        }
        return coffeeRecipe
    }

    showCoffeeRecipe() {
        console.log(this.setCoffeeRecipe())
    }

}
