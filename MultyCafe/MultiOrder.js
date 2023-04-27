import CoffeeOrder from "./CoffeeOrder.js"
import SandwichOrder from "./SandwichOrder.js"


let totalPrice = 0
let allPrices = []
let coffeeOrder1 = new CoffeeOrder(1, "Latte", "small")
let coffeeOrder2 = new CoffeeOrder(2, "Cappuccino", "medium", "sweet")
let sandwichOrder1 = new SandwichOrder(1, 'salmon')

//v1 for price calculation
// /**
//  * @param {Array} allPrices
//  * @returns totalPrice
//  */
// function calcTotalPrice(allPrices) {
//    for (let i in allPrices) {
//        totalPrice += allPrices[i]
//        console.log(allPrices[i]);//this line not necessary
//    }
//    return totalPrice
// }

//v2 for price calculation

function calcTotalPrice() {
    for (let i in allPrices) {
        totalPrice += allPrices[i]
    }
    return totalPrice
}

function addPrice(price) {
    allPrices.push(price)
    return allPrices
}

//======================================
function showTotalPrice() {
    console.log(`Your total price is: $` + calcTotalPrice())
}



//OUTPUT
//Show is sweet
console.log(`${coffeeOrder1.coffeeName} is sweet: ` + coffeeOrder1.setSweet())
console.log(`${coffeeOrder2.coffeeName} is sweet : ` + coffeeOrder2.setSweet())
console.log('====================\n')

coffeeOrder1.showCoffeeRecipe()
coffeeOrder1.showCoffeePrice()
console.log('====================\n')

coffeeOrder2.showCoffeeRecipe()
coffeeOrder2.showCoffeePrice()
console.log('====================\n')

sandwichOrder1.showSandwichChoice()
sandwichOrder1.showSandwichIngredients()
sandwichOrder1.showSandwichPrice()

console.log('====================\n')
coffeeOrder1.showCoffeePrice()
coffeeOrder2.showCoffeePrice()
sandwichOrder1.showSandwichPrice()

//if you use function from v1 => use this calculation method
// calcTotalPrice([coffeeOrder1.price, coffeeOrder2.price, sandwichOrder1.price])

//if you use function from v2 => use this calculation method
addPrice(5)
addPrice(7.5)
addPrice(15)


//for both v1 and v2
showTotalPrice()



