function solve() {
    function styleText(text, types = []) {
        text.style.fontWeight = types.includes('bold') ? 'bold' : 'normal';
        text.style.textDecoration = types.includes('underline') ? 'underline' : 'none';
    }

    const towns = document.querySelectorAll('#towns li');
    const searchBar = document.getElementById('searchText').value.toLowerCase();
    let result = document.getElementById('result');
    for (const t of towns) {
        styleText(t);
    }

    let matches = 0;
    for (const t of towns) {
        const town = t.textContent.toLowerCase();
        if (searchBar && town.includes(searchBar)) {
            styleText(t, ['bold', 'underline']);
            matches++;
        }
    }
    result.textContent = `${matches} matches found`;
}