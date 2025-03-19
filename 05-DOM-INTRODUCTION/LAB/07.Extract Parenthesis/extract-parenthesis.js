function extract(content) {
    let pattern = /\((.+?)\)/g;
    let el = document.getElementById(content);
    let text = el.textContent;

    let match = pattern.exec(text)
    let result = [];

    while (match){
        result.push(match[1]);

         match = pattern.exec(text);
    }

    return result.join('; ')
}