function solve() {
    const tableHeader = document.querySelectorAll('table input');
    const tableData = document.querySelectorAll('tbody tr');
    const output = document.getElementById('output');

    const chekRows = {};
    const result = [];
    for (let i = 0; i < tableHeader.length; i++) {
        if (tableHeader[i].checked) {
            chekRows[i] = tableHeader[i].name;
        }
    }

    for (let i = 0; i < tableData.length; i++) {
        let rowData = {};
        for (let j = 0; j < tableData[i].children.length; j++) {
            if (j in chekRows) {
                rowData[chekRows[j]] = tableData[i].children[j].textContent;
            }
        }
        result.push(rowData);
    }

    output.value = JSON.stringify(result);
}