class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        }

    get totalCost() {
        return this.storage.reduce((total, p) => total + (p.quantity * p.price), 0);
    }

    getProducts() {
        return this.storage.map(p => JSON.stringify(p)).join('\n');
    }
}
