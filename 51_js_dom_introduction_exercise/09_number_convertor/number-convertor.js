function solve() {
    const convert = {
            binary: (v) => v.toString(2),
            hexadecimal: (v) => v.toString(16).toUpperCase(),
        }

    const selectMenuTo = document.getElementById('selectMenuTo').value;
    const input = Number(document.getElementById('input').value);
    const result = document.getElementById('result');

    result.value = convert[selectMenuTo] ? convert[selectMenuTo](input) : '';

}