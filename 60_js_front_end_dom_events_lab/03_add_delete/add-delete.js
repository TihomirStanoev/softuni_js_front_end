function addItem() {
    function addRemoveLi(ulElement, inputText) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        li.textContent = inputText;
        Object.assign(a, {
            href: '#',
            textContent: '[Delete]',
        })

        li.appendChild(a);
        ulElement.appendChild(li);

        a.addEventListener('click', () => {
            a.parentElement.remove();
        });
    }

    const ul = document.getElementById('items');
    const input = document.getElementById('newItemText').value;

    if (input) {
        addRemoveLi(ul, input);
    }
}
