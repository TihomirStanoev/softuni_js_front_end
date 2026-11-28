document.addEventListener('DOMContentLoaded', solve);

function solve() {
    function createImg(imgValue) {
                const img = document.createElement('img');
                img.src = imgValue;
                return img;
            }

    function createP(pValue) {
                const p = document.createElement('p');
                p.textContent = pValue;
                return p;
        }

    function createCheckbox() {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                return checkbox;
        }

    function addTr(furniture) {
        const tr = document.createElement('tr');
        for (const column of Object.keys(columnsFuncs)) {
            const td = document.createElement('td');
            const furnitureEl = furniture[column];
            const el = column !== furnitureEl ? columnsFuncs[column](furnitureEl) : columnsFuncs[column]();
            td.appendChild(el);
            tr.appendChild(td);
        }

        return tr;
    }

        function printResult(furnitureObjs) {
        const furnitureNames = [];
        let factor = 0;
        let totalPrice = 0;

        for (const f of furnitureObjs) {
            furnitureNames.push(f.name);
            totalPrice += f.price;
            factor += f.decFactor;
        }

        return `Bought furniture: ${furnitureNames.join(', ')}\nTotal price: ${totalPrice}\nAverage decoration factor: ${factor / furnitureNames.length}`
    }


    const columnsFuncs = {'img': createImg, 'name': createP, 'price': createP, 'decFactor': createP, 'checkbox': createCheckbox}
    const inputForm = document.getElementById('input');
    const inputFormTextarea = inputForm.querySelector('textarea');
    const table = document.querySelector('table tbody');


    const shopForm = document.getElementById('shop');
    const shopFormTextarea = shopForm.querySelector('textarea');


    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const furnitureList = JSON.parse(inputFormTextarea.value);

        for (const furniture of furnitureList) {
            const trEl = addTr(furniture);
            table.appendChild(trEl)
        }
    });


    shopForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let furnitureArr = [];
        let result = '';

        for (const f of table.children) {
            const checkbox = f.children[4].querySelector('input[type=checkbox]');

            if (checkbox.checked) {
                furnitureArr.push({
                    name: f.children[1].children[0].textContent,
                    decFactor: Number(f.children[3].children[0].textContent),
                    price: Number(f.children[2].children[0].textContent),
                })
            }
        }

        result = furnitureArr.length > 0 ? printResult(furnitureArr) : result;
        if (result) {
        shopFormTextarea.value = result;
        }
    })
}