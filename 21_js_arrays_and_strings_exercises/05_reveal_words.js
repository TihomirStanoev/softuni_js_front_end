function solve(words, template) {
    words = words.split(', ');

    for (let word of words) {
        template = template.replace('*'.repeat(word.length), word);
    }

    return template;
}
