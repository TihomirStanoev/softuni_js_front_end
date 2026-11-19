function solve() {
    const tableBody = document.querySelector('.container tbody');
    const searchInput = document.getElementById('searchField');

    const searchBoxContent = searchInput.value.toLowerCase();
    for (const row of tableBody.children) {
        row.classList.remove('select');
        for (const cell of row.children) {
            const cellContent = cell.textContent.toLowerCase();
            if (cellContent.includes(searchBoxContent) && searchBoxContent) {
                row.classList.add('select');
                break;
            }
        }
    }
    searchInput.value = '';
}