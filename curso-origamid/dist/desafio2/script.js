import fetchData from "./fetchData.js";
import normalizarTransacao from './normalizarTransacao.js';
async function handleData1() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    console.log(transacoes);
}
handleData1();
//# sourceMappingURL=script.js.map