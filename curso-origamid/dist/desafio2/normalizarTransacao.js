export default function normalizarTransacao(trasacao) {
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
    };
}
//# sourceMappingURL=normalizarTransacao.js.map