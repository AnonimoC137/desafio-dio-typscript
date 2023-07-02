type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";




export interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ["Valor (R$)"]: string;
    ["Forma de pagamento"]: TransacaoPagamento;
    ["Cliente Novo"]: number;
}

interface Trasacao {
    nome: string;
    id: number;
    data: string;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
}

export default function normalizarTransacao(trasacao: TransacaoAPI) {
    return {
        nome: trasacao.Nome,
        id: trasacao.ID,
        data: trasacao.Data,
        status: trasacao.Status,
        email: trasacao.Email,
        moeda: trasacao["Valor (R$)"],
        valor: 0,
        pagamento: trasacao["Forma de pagamento"],
        novo: Boolean(trasacao["Cliente Novo"]),
    }
}