function fruit(fruitName, quantity, price) {
    let quantityKg = quantity / 1000;
    let neededMoney = quantityKg * price;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${quantityKg.toFixed(2)} kilograms ${fruitName}.`)
}

fruit('orange', 2500, 1.80)