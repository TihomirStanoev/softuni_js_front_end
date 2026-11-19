function solve() {
    const textArea = document.getElementById('input').value;
    const output = document.getElementById('output');
    const sentences = textArea.split('.').map(x => x.trim()).filter(x => x.length > 0);

    output.textContent = '';
    for (let i = 0; i < sentences.length; i += 3) {
        const s = sentences.slice(i, i + 3).map(s => s.trim());
        const p = document.createElement('p');
        p.textContent = s.join('. ') + '.';
        output.appendChild(p);
    }
}