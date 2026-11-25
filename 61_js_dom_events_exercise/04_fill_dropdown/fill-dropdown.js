document.addEventListener('DOMContentLoaded', solve);

function solve() {
    function createOption(optionText, textValue) {
        const option = document.createElement('option');
        option.value = textValue;
        option.textContent = optionText;
        select.appendChild(option);
    }


    function addToMenu(e) {
        e.preventDefault();
        createOption(formText.value, formValue.value);
        form.reset();
    }



    const select = document.getElementById('menu');
    const form = document.querySelector('form');
    const formText = form.querySelector('#newItemText');
    const formValue = form.querySelector('#newItemValue');


    form.addEventListener('submit', addToMenu);

}