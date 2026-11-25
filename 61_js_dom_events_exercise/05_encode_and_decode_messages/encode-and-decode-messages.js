document.addEventListener('DOMContentLoaded', solve);

function solve() {
    function encodeDecode(message, offset) {
        return [...message].map(c => String.fromCharCode(c.charCodeAt(0) + offset)).join('');
    }


    const formEncode = document.getElementById('encode');
    const encodeTextarea = formEncode.querySelector('textarea');

    const formDecode = document.getElementById('decode');
    const decodeTextarea = formDecode.querySelector('textarea');


    formEncode.addEventListener('submit', (e) => {
        e.preventDefault();
        decodeTextarea.value = encodeDecode(encodeTextarea.value, 1);
        encodeTextarea.value = '';
    });

    formDecode.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = decodeTextarea.value;
        decodeTextarea.value = encodeDecode(message, -1);
    })

}