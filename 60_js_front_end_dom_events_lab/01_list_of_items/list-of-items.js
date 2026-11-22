function addItem() {
    const items = document.getElementById('items');
    const newItem = document.getElementById('newItemText').value;
    const newItemLi = document.createElement('li');

    newItemLi.textContent = newItem;
    items.appendChild(newItemLi);
}
