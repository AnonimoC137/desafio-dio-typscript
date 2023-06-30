import fetchData from "./fetchData.js";

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";




interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ["Valor (R$)"]: string;
    ["Forma de pagamento"]: TransacaoPagamento;
    ["Cliente Novo"]: number;
}

async function handleData1() {
    const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json');
    if(data) {
        data.forEach(item => {
            console.log(item)
        })
    }

}

handleData1()

