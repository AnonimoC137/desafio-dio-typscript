"use strict";
// exercicio para o uso de keyof
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterface(obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function handleData() {
    const jogo = await fetchData('/jogo.json');
    if (checkInterface(jogo, 'desenvolvedora')) {
        console.log(jogo);
    }
    const livro = await fetch('/livro.json');
    console.log(jogo);
}
handleData();