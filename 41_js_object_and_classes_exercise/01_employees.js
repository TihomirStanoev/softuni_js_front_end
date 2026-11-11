function solve(empArr) {
    function createEmployeesObjects(employeesArr) {
        let employees = [];

        for (const e of employeesArr) {
            employees.push({
                name: e,
                personalNumber: e.length
            })
        }
        return employees;
    }


    function printEmployees(employeesArr) {
        for (const e of employeesArr) {
            console.log(`Name: ${e.name} -- Personal Number: ${e.personalNumber}`)
        }
    }

    const emp = createEmployeesObjects(empArr)
    printEmployees(emp)

}