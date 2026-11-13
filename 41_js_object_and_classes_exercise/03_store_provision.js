function solve(currentStock, orderedStock) {
    function addStock(stockArr) {
        for (let i = 0; i < stockArr.length; i += 2) {
            const product = stockArr[i];
            const quantity = Number(stockArr[i + 1]);

            if (product in products) {
                products[product] += quantity;
            } else {
                products[product] = quantity;
            }
        }
    }


    let products = {};
    addStock(currentStock);
    addStock(orderedStock);

    for (const [product, count] of Object.entries(products)) {
        console.log(`${product} -> ${count}`);
    }
}