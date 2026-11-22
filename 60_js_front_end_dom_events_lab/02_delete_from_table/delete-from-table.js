function deleteByEmail() {
    const table = document.querySelectorAll('tbody tr');
    const email = document.querySelector('input[name="email"]').value;
    const result = document.getElementById('result');
    result.textContent = '';

    let isDeleted = false;
    for (const row of table) {
        const cellEmail = row.children[1].textContent;
        if (cellEmail === email) {
            row.remove();
            isDeleted = true;
        }
    }

    result.textContent = isDeleted ? 'Deleted.' : 'Not found.';
}
