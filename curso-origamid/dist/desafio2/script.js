import fetchData from "./fetchData.js";
async function handleData1() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    if (data) {
        data.forEach(item => {
            console.log(item);
        });
    }
}
handleData1();
//# sourceMappingURL=script.js.map