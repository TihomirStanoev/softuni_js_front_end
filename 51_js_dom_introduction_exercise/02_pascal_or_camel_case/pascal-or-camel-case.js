function solve() {
    function pascalCase(text) {
        const textArr = text.split(' ');
        return textArr.map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()).join('');
    }


    function camelCase(text) {
        const result = pascalCase(text);
        return result.charAt(0).toLowerCase() + result.slice(1);
    }

    const cases = {
        'Pascal Case': pascalCase,
        'Camel Case': camelCase
    };

    const convention = document.getElementById('naming-convention').value;
    const text = document.getElementById('text').value;
    const resultSpan = document.getElementById('result');

    if (Object.hasOwn(cases, convention)) {
        resultSpan.textContent = cases[convention](text);
    } else {
        resultSpan.textContent = 'Error!';
    }
}


